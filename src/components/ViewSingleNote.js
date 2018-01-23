import React, {PureComponent} from 'react'
import {Text, View, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'

import {styles} from './styles'
import {updateNote} from '../actions'

import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Content
} from 'native-base'

class SingleNote extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      changed: false,
      id: this.props.navigation.state.params.noteId,
      title: this.props.navigation.state.params.title,
      desc: this.props.navigation.state.params.description
    }
  }
  render() {
    return (
      <Container style={styles.addNotesContainer}>
        <Header style={{
          backgroundColor: 'white'
        }}/>

        <Content style={styles.textInputContainer}>
          <TextInput
            style={styles.inputTitleStyle}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({title: text, changed: true})}
            value={this.state.title}/>

          <TextInput
            style={styles.inputDescriptionStyle}
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({desc: text, changed: true})}
            value={this.state.desc}/>
        </Content>

        <Content style={styles.inputScreenBtnContainer}>
          <Button
            title="uddateNote"
            onPress={this
            .updateNote
            .bind(this)}/>

        </Content>

      </Container>
    )
  }

  goBack(event) {
    this
      .props
      .navigator
      .pop()
  }

  updateNote() {
    if (this.state.changed) {
      this
        .props
        .updateNote({id: this.state.id, title: this.state.title, description: this.state.desc})
    }

  }
}

export default connect(null, {updateNote})(SingleNote)