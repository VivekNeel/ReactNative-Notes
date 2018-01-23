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
import ViewAllNotes from '../components/ViewAllNotes'

class home extends PureComponent {

  render() {

    return (
      <Container>

        <Content>
          <ViewAllNotes navigator={this.props.navigation}/>
        </Content>

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