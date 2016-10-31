// add spec here!
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Mention from '../src';
import TestUtils from 'react-addons-test-utils';

describe('Mention', () => {
  let div;

  function renderMention(props) {
    return ReactDOM.render(
      <Mention
        style={{ width: 300 }}
        placeholder=" @ 某人 "
        defaultValue="input something"
        suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']} prefix="@"
        {...props}
      />, div);
  }

  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it(' mention mount correctly', done => {
    const mention = renderMention();
    const input = TestUtils.scryRenderedDOMComponentsWithClass(mention,
      'rc-editor-mention-editor')[0];
    expect(input).to.be.ok();
    done();
  });

  it(' mention defaultValue correctly', done => {
    let change;
    const mention = renderMention({
      onChange(v, text) {
        change = text;
      },
    });
    expect(mention).to.be.ok();
    expect(change).to.be('input something');
    done();
  });
});
