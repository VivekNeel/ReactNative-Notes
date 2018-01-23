/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PureComponent} from 'react';
import Pages from './src/pages'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ApplicationStore from './src/reducers'
import Navigator from 'react-native'
import AllNotes from './src/components/ViewAllNotes'
import * as storage from 'redux-storage'

const reducer = storage.reducer(ApplicationStore)

import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
const engine = createEngine('notely')

const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)

const routes = [
  {
    component: AllNotes
  }
]
export default class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <Pages/>
      </Provider>
    )
  }
}
