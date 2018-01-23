import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Content
} from 'native-base'

import moment from 'moment'
import React, {PureComponent} from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'

import {styles} from './styles'
import {createNote} from '../actions'

class NewNote extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: ''
    }
  }

  render() {
    return (
      <Container style={styles.createNoteContainer}>
        <Header style={{
          backgroundColor: 'white'
        }}/>

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

        <Content style={styles.inputScreenBtnContainer}>
          <Button
            title="addNote"
            onPress={this
            .createNote
            .bind(this)}/>

        </Content>

      </Container>
    )
  }

  createNote() {
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

export default connect(null, {createNote})(NewNote)
