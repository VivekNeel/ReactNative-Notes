import React, {PureComponent} from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'

import {styles} from './styles'
import {updateNote} from '../actions'
import * as Constants from '../constants'
import moment from 'moment'

import {
  Container,
  Header,
  Body,
  Right,
  Title,
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
      desc: this.props.navigation.state.params.description,
      time: "Last updated " + this.props.navigation.state.params.time,
      editPressed: false
    }
  }

  static navigationOptions = ({
    title: ``,
    headerStyle: {
      backgroundColor: '#ffffff'
    },
    header: null
  });

  renderNoteView() {
    return (
      <Content style={{
        margin: 25
      }}>
        <Text
          style={{
          fontSize: 20,
          color: Constants.COLOR_GRAY
        }}>{this.state.desc}</Text>
      </Content>
    )
  }

  renderEditModeView() {
    return (
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
    )
  }

  render() {
    return (
      <Container style={styles.createNoteContainer}>
        <Header
          androidStatusBarColor={Constants.COLOR_PRIMARY_DARK}
          style={(this.state.editPressed
          ? styles.header
          : styles.editModeHeader)}>
          <Body>
            {!this.state.editPressed && <Title style={styles.editModeTitle}>{this.state.title}
            </Title>
}
            {!this.state.editPressed && <Title
              style={{
              fontSize: 10,
              marginRight: 20,
              color: Constants.COLOR_GRAY
            }}>{this.state.time}</Title>}
          </Body>

          <Right>
            {!this.state.editPressed && <TouchableHighlight
              onPress={() => {
              console.log('edit clicked');
              this.setState({editPressed: true});
            }}>
              <Text style={styles.updateInEditMode}>edit</Text>
            </TouchableHighlight>}

            {this.state.editPressed && <TouchableHighlight
              onPress={this
              .updateNote
              .bind(this)}>
              <Text style={{
                color: Constants.COLOR_BLACK
              }}>save</Text>
            </TouchableHighlight>}
          </Right>
        </Header>

        {!this.state.editPressed && this.renderNoteView()
}
        {this.state.editPressed && this.renderEditModeView()}

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
        .updateNote({
          id: this.state.id,
          title: this.state.title,
          description: this.state.desc,
          time: moment().format('HH:mm a')
        })
    }
    this
      .props
      .navigation
      .goBack()
  }
}
export default connect(null, {updateNote})(SingleNote)