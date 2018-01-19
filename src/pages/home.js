import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import {Text, View, Button} from 'react-native'

import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Content
} from 'native-base'

import React, {PureComponent} from 'react'

class home extends PureComponent {

  render() {
    return (
      <Container>
        <Header style={{
          backgroundColor: 'white'
        }}>
          <Left>
            <Text>Notes</Text>
          </Left>
          <Right>
            <Button
              title="Drawer"
              onPress={() => {
              console.log('open drawer')
            }}></Button>

          </Right>
        </Header>

      </Container>
    )
  }
  static navigationOptions = ({
    title: `Notes`,
    headerStyle: {
      backgroundColor: '#ffffff'
    },
    header: null
  });
}

function stateToProps(state) {
  return {note: state}
}

export default connect(stateToProps, null)(home)