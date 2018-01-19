import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'

import React, {PureComponent} from 'react'

class home extends PureComponent {

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
  static navigationOptions = ({
    title: `Notes`,
    headerStyle: {
      backgroundColor: '#ffffff'
    }
  });
}

function stateToProps(state) {
  return {note: state}
}

export default connect(stateToProps, null)(home)