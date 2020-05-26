import React from 'react';
//import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import RestaurantsContainer from './RestaurantsContainer';
import store from '../store/index'


const AppWrapper = () => {
  return (
    <Provider store={store}> // Set context
      <RestaurantsContainer /> // Now App has access to context
    </Provider>
  )
}

const setup = () => {
  return mount(<AppWrapper />);
}

describe('Tags exist in the restaurant container', function() {
  test('Component content box renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'restaurant-box');
    expect (component.length).toBe(1);
  });
  test('Component restaurant results section renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'restaurant-container');
    expect (component.length).toBe(1);
  });
});