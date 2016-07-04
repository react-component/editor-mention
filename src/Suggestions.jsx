import React from 'react';
import ReactDOM from 'react-dom';
import getSearchWord from './utils/getSearchWord';
import { decode } from 'draft-js/lib/DraftOffsetKey';
import insertMention from './utils/insertMention';
import Nav from './Nav';
import cx from 'classnames';
import scrollIntoView from 'dom-scroll-into-view';

const isNotFalse = (i) => i !== false;
export default class Suggestions extends React.Component {
  static propTypes = {
    callbacks: React.PropTypes.object,
    suggestions: React.PropTypes.array,
    store: React.PropTypes.object,
    onSearchChange: React.PropTypes.func,
    prefix: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    mode: React.PropTypes.string,
    style: React.PropTypes.object,
    notFoundContent: React.PropTypes.any,
    getSuggestionStyle: React.PropTypes.func,
  }
  constructor() {
    super();
    this.state = {
      isActive: false,
      focusedIndex: 0,
    };
  }
  componentWillMount() {
    this.props.callbacks.onChange = this.onEditorStateChange;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.suggestions.length !== this.props.suggestions.length) {
      this.setState({
        focusedIndex: 0,
      });
    }
  }
  componentDidUpdate() {
    const focusItem = ReactDOM.findDOMNode(this.refs.focusItem);
    const container = this.refs.dropdownContainer;
    if (!focusItem) {
      return;
    }
    scrollIntoView(focusItem, container, {
      onlyScrollIfNeeded: true,
    });
  }
  onEditorStateChange = (editorState) => {
    const { offset } = this.props.store;
    if (offset.size === 0) {
      return editorState;
    }
    const selection = editorState.getSelection();
    const { word } = getSearchWord(editorState, selection);
    const selectionInsideMention = offset.map(({ offsetKey, position }) => {
      const { blockKey, decoratorKey, leafKey } = decode(offsetKey);
      if (blockKey !== selection.anchorKey) {
        return false;
      }
      const leaf = editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);
      if (!leaf) {
        return false;
      }
      const startKey = leaf.get('start');
      const endKey = leaf.get('end');
      return selection.anchorOffset > startKey + 1 && selection.anchorOffset <= endKey
        ? position
        : false;
    });
    const selectionInText = selectionInsideMention.some(isNotFalse);
    const dropDownPosition = selectionInsideMention.find(isNotFalse);

    if (!selectionInText) {
      return this.closeDropDown(dropDownPosition);
    }
    const searchValue = word.substring(1, word.length);
    if (this.lastSearchValue !== searchValue) {
      this.lastSearchValue = searchValue;
      this.props.onSearchChange(searchValue);
    }
    if (!this.state.active) {
      this.openDropDown(dropDownPosition);
    }
  }
  onMentionSelect(mention, data) {
    const editorState = this.props.callbacks.getEditorState();
    this.props.callbacks.setEditorState(
      insertMention(editorState, `${this.props.prefix}${mention}`, data, this.props.mode)
    );
    this.closeDropDown();
  }
  onUpArrow = (ev) => {
    ev.preventDefault();
    if (this.props.suggestions.length > 0) {
      const newIndex = this.state.focusedIndex - 1;
      this.setState({
        focusedIndex: Math.max(newIndex, 0),
      });
    }
  }
  onDownArrow = (ev) => {
    ev.preventDefault();
    const newIndex = this.state.focusedIndex + 1;
    this.setState({
      focusedIndex: newIndex >= this.props.suggestions.length ? 0 : newIndex,
    });
  }
  getPositionStyle(isActive, position) {
    if (this.props.getSuggestionStyle) {
      return this.props.getSuggestionStyle(isActive, position);
    }
    return position ? {
      position: 'absolute',
      left: position.left,
      top: position.top - (ReactDOM.findDOMNode(this) ? ReactDOM.findDOMNode(this).parentNode.scrollTop : 0),
      ...this.props.style,
    } : {};
  }
  handleReturn = (ev) => {
    ev.preventDefault();
    const selectedSuggestion = this.props.suggestions[this.state.focusedIndex];
    if (selectedSuggestion) {
      if (React.isValidElement(selectedSuggestion)) {
        this.onMentionSelect(selectedSuggestion.props.value, selectedSuggestion.props.data);
      } else {
        this.onMentionSelect(selectedSuggestion);
      }
      return true;
    }
    return false;
  }
  handleKeyBinding = (command) => {
    return command === 'split-block';
  }
  openDropDown(dropDownPosition) {
    this.props.callbacks.onUpArrow = this.onUpArrow;
    this.props.callbacks.handleReturn = this.handleReturn;
    this.props.callbacks.handleKeyBinding = this.handleKeyBinding;
    this.props.callbacks.onDownArrow = this.onDownArrow;
    this.setState({
      active: true,
      suggestionStyle: this.getPositionStyle(true, dropDownPosition),
    });
  }
  closeDropDown(dropDownPosition) {
    this.props.callbacks.onUpArrow = null;
    this.props.callbacks.handleReturn = null;
    this.props.callbacks.handleKeyBinding = null;
    this.props.callbacks.onDownArrow = null;
    this.setState({
      active: false,
      suggestionStyle: this.getPositionStyle(false, dropDownPosition),
    });
  }
  render() {
    if (!this.state.active) {
      return <span />;
    }
    const { prefixCls, suggestions } = this.props;
    const { focusedIndex, suggestionStyle } = this.state;
    const navigations = suggestions.length ? React.Children.map(suggestions, (element, index) => {
      const focusItem = index === focusedIndex;
      const ref = focusItem ? 'focusItem' : null;
      const mentionClass = cx(`${prefixCls}-dropdown-item`, {
        focus: focusItem,
      });
      if (React.isValidElement(element)) {
        return React.cloneElement(element, {
          className: mentionClass,
          onClick: this.onMentionSelect.bind(this, element.props.value),
          ref,
        });
      }
      return (<Nav ref={ref} className={mentionClass}
        onClick={this.onMentionSelect.bind(this, element)}
      >{element}
      </Nav>);
    }, this) : <div className={`${prefixCls}-dropdown-notfound ${prefixCls}-dropdown-item`}>{this.props.notFoundContent}</div>

    return (<div
      style={suggestionStyle}
      className={`${prefixCls}-dropdown`}
      ref="dropdownContainer"
    >{navigations}</div>);
  }
}
