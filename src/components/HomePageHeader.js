import {
  Container,
  Header,
  Body,
  Right,
  Title,
  Left,
  Content
} from 'native-base'
import {Platform, TouchableHighlight, Image, Button} from 'react-native'
import * as Constants from '../constants'

import React, {PureComponent} from 'react'
import {StyleSheet} from 'react-native'

export default class HomePageHeader extends PureComponent {

  render() {
    return (
      <Header
        androidStatusBarColor={Constants.COLOR_PRIMARY_DARK}
        style={{
        backgroundColor: Constants.COLOR_PRIMARY
      }}>
        {Platform.OS === "ios" && <Left >
          <Button
            title=""
            style={styles.header}
            onPress={() => {
            console.log('button pressed')
          }}></Button>

        </Left>}

        <Body>
          <Title style={styles.title}>Notely</Title>
        </Body>

        <Right >
          <TouchableHighlight
            onPress={() => {
            this
              .props
              .onCreateNotePressed()
          }}>
            <Image source={require("../images/create.png")} style={styles.create}></Image>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
            this
              .props
              .onFilterPressed()
          }}>
            <Image source={require("../images/filter.png")} style={styles.filter}></Image>
          </TouchableHighlight>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  filter: {
    width: 25,
    height: 25
  },
  create: {
    width: 25,
    height: 25,
    marginRight: 30
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  header: {
    backgroundColor: 'transparent'

  }
})