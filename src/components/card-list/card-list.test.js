import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Sorts} from '../../constants.js';
import CardList from './card-list.jsx';
import {Mock} from '../../mocks/test-mock.js';

const mockStore = configureStore([]);

it(`Render Cards list`, () => {
  const store = mockStore({
    offers: Mock.offers,
    city: Mock.cities[0],
    cities: Mock.cities,
    userEmail: Mock.userEmail,
    sorts: Sorts,
    activeSort: Sorts.POPULAR,
    activeOfferId: null
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <CardList onCardTitleClick={() => {}}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
