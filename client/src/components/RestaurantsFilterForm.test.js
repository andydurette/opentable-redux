import React from 'react';
//import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import RestaurantsFilterForm from './RestaurantsFilterForm';
import store from '../store/index'


const AppWrapper = () => {
  return (
    <Provider store={store}> // Set context
      <RestaurantsFilterForm /> // Now App has access to context
    </Provider>
  )
}

const setup = () => {
  return mount(<AppWrapper />);
}

describe('Tags exist in the restaurant filter form', function() {
  test('Component filter form renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'restaurant-filter');
    expect (component.length).toBe(1);
  });
  test('Component filter form renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'restaurant-filter-input');
    expect (component.length).toBe(1);
  });
});
