import 'rc-editor-mention/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import RcMention, { Nav, toString, toEditorState } from 'rc-editor-mention';
import classnames from 'classnames';

export default class Mention extends React.Component {
  static defaultProps = {
    prefixCls: 'ant-mention',
    suggestions: [],
    notFoundContent: '无匹配结果，轻敲空格完成输入',
    loading: false,
    multiLines: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.suggestions,
      focus: false,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      suggestions: nextProps.suggestions,
    });
  }
  
  onSearchChange(value) {
    if (this.props.onSearchChange) {
      return this.props.onSearchChange(value);
    }
    return this.defaultSearchChange(value);
  }
  
  onChange(editorState) {
    if (this.props.onChange) {
      this.props.onChange(editorState);
    }
  }
  
  defaultSearchChange(value) {
    const searchValue = value.toLowerCase();
    const filteredSuggestions = this.props.suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(searchValue) !== -1
    );
    this.setState({
      suggestions: filteredSuggestions,
    });
  }
  
  render() {
    const { className, prefixCls, style, multiLines, defaultValue } = this.props;
    let { notFoundContent } = this.props;
    
    const { suggestions, focus } = this.state;
    const cls = classnames({
      [className]: !!className,
      ['active']: focus,
    });
    
    if (this.props.loading) {
      notFoundContent = <i className="anticon anticon-loading"></i>;
    }
    
    return <RcMention
      {...this.props}
      className={cls}
      prefixCls={prefixCls}
      style={style}
      defaultValue={defaultValue}
      multiLines={multiLines}
      onSearchChange={this.onSearchChange.bind(this)}
      onChange={this.onChange.bind(this)}
      onFocus={() => this.setState({focus: true})}
      onBlur={() => this.setState({focus: false})}
      suggestions={suggestions}
      notFoundContent={notFoundContent}
    />;
  }
}


function onChange(editorState) {
  console.log(toString(editorState));
}

ReactDOM.render(<Mention
  onChange={onChange}
  defaultValue={toEditorState('@afc163')}
  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
/>, document.getElementById('__react-content'));
