import React from 'react';
//import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import RestaurantsForm from './RestaurantsForm';
import store from '../store/index'


const AppWrapper = () => {
  return (
    <Provider store={store}> // Set context
      <RestaurantsForm /> // Now App has access to context
    </Provider>
  )
}

const setup = () => {
  return mount(<AppWrapper />);
}

describe('Tags exist in the restaurant form', function() {
  test('Search form exists', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'restaurant-search-form');
    expect (component.length).toBe(1);
    console.log(wrapper.debug());
  });
});
