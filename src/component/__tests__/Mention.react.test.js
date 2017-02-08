import React from 'react';
import { render, mount } from 'enzyme';
import Mention from '../Mention.react';


describe('Mention.react', () => {
  describe('Basic rendering', () => {
    it('render correctly', () => {
      var block = mount(
        <Mention prefix="test"/>
      );

      expect(block.find('.test-wrapper')).not.toBe(null);

    });

    it('Basic suggestion', () => {
      jest.useFakeTimers();
      const handleSearch = jest.fn();
      var block = mount(
        <Mention
          suggestions={['afc163', 'raohai']}
          onSearchChange={handleSearch}
        />
      );

      block.find('DraftEditor').node.focus();
      block.find('.public-DraftEditor-content').simulate('beforeInput', { data: '@a' });
      jest.runAllTimers();
      expect(handleSearch).toBeCalledWith('a', '@');
    });
  });
});