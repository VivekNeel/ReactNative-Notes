import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Icon,
  Content
} from 'native-base'

import moment from 'moment'
import React, {PureComponent} from 'react'
import {Text, View, TextInput, Button, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'

import {styles} from './styles'
import {createNote} from '../actions'
import * as Constants from '../constants'
import {isEmpty} from 'lodash'
import Toast from 'react-native-root-toast'

class NewNote extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: ''
    }
  }

  static navigationOptions = ({header: null});

  isTitleOrDescEmpty() {
    if (isEmpty(this.state.title) || isEmpty(this.state.desc)) {
      return true
    }
  }

  onSaveClicked() {
    if (this.isTitleOrDescEmpty()) {
      Toast.show(Constants.ERROR_MESSAGES.NEW_NOTE.ERROR_MESSAGE_NO_TITLE_DESC)
    } else {
      this
        .props
        .createNote({
          title: this.state.title,
          description: this.state.desc,
          time: "Today at : " + moment().format('HH:mm a')
        })
      this
        .props
        .navigation
        .goBack()
    }
  }
  render() {
    return (
      <Container style={styles.createNoteContainer}>
        <Header
          androidStatusBarColor={Constants.COLOR_PRIMARY_DARK}
          style={{
          backgroundColor: Constants.COLOR_PRIMARY
        }}>
          <Icon
            style={styles.headerBack}
            onPress={() => {
            (this.isTitleOrDescEmpty()
              ? Toast.show(Constants.ERROR_MESSAGES.NEW_NOTE.ERROR_MESSAGE_NO_TITLE_DESC)
              : this.props.navigation.goBack())
          }}
            name="arrow-back"/>
          <Right>
            <TouchableHighlight
              onPress={() => {
              this.onSaveClicked()
            }}>
              <Text>
                save
              </Text>
            </TouchableHighlight>

          </Right>
        </Header>

        <Content style={styles.textInputContainer}>
          <TextInput
            style={styles.inputTitleStyle}
            autoFocus={true}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title}/>

          <TextInput
            style={styles.inputDescriptionStyle}
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.desc}/>
        </Content>

      </Container>
    )
  }
}

export default connect(null, {createNote})(NewNote)
