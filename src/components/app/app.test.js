import React from 'react';
import renderer from 'react-test-renderer';
import {Mock} from '../../mocks/test-mock.js';
import App from './app.jsx';

jest.mock(`../map/map.jsx`, () => `Map`);

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      countOffers={Mock.countOffers}
      userEmail={Mock.userEmail}
      onCardTitleClick={() => {}}
      offers={Mock.cards}
      city={Mock.city}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
