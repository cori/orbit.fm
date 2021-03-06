import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

import './src/utils/global-styles';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <Provider store={store}>{element}</Provider>;

  return ConnectedRootElement;
};
