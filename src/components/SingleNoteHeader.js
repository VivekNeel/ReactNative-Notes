import React, {PureComponent} from 'react'
import {Header, Icon, Right} from 'native-base'
import {View, TouchableHighlight, Text} from 'react-native'
import {styles} from '../components/styles'
import * as Constants from '../constants'

export default class extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      editPressed: false
    }
  }

  render() {
    const {editPressed} = this.state
    return (
      <Header
        androidStatusBarColor={Constants.COLOR_PRIMARY_DARK}
        style={(this.state.editPressed
        ? styles.header
        : styles.editModeHeader)}>
        <View style={{
          flexDirection: 'column'
        }}>
          <Icon
            style={styles.headerBack}
            onPress={() => {
            this
              .props
              .navigation
              .goBack()
          }}
            name="arrow-back"/>
          <View >
            {!editPressed && <Text numberOfLines={1} style={styles.editModeTitle}>{this.props.title}
            </Text>
}
            {!editPressed && <Text numberOfLines={1} style={styles.normalTime}>{this.props.time}</Text>}
          </View>
        </View>

        <Right>
          {!editPressed && <TouchableHighlight
            onPress={() => {
            this.setState({
              editPressed: true
            }, () => {
              this
                .props
                .onEditClicked()
            });
          }}>
            <Text style={styles.updateInEditMode}>edit</Text>
          </TouchableHighlight>}

          {editPressed && <TouchableHighlight
            onPress={this
            .props
            .updateNote
            .bind(this)}>
            <Text style={{
              color: Constants.COLOR_BLACK
            }}>save</Text>
          </TouchableHighlight>}
        </Right>
      </Header>
    )
  }
}