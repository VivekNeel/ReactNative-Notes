/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PureComponent} from 'react';
import Pages from './src/pages'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import addnote from './src/reducers/addnote'

const store = createStore(addnote)
export default class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <Pages/>
      </Provider>
    )
  }
}