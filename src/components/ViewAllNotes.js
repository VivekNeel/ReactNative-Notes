import {
  Container,
  Header,
  Body,
  Right,
  Title,
  Left,
  Content
} from 'native-base'

import React, {Component} from 'react'
import {
  Text,
  View,
  Alert,
  ListView,
  Button,
  TouchableHighlight,
  Image
} from 'react-native'
import {connect} from 'react-redux'

import NewNote from './NewNote'
import SingleNote from './ViewSingleNote'
import Card from './NoteViewCard'
import {deleteNote} from '../actions'
import {styles} from './styles'
import * as Constants from '../constants'

class AllNotes extends Component {
  renderHeader() {

    return (
      <Header
        androidStatusBarColor={Constants.COLOR_PRIMARY_DARK}
        style={{
        backgroundColor: Constants.COLOR_PRIMARY
      }}>

        <Left >
          <Button
            title=""
            style={{
            backgroundColor: 'transparent'
          }}
            onPress={() => {
            console.log('button pressed')
          }}></Button>

        </Left>
        <Body>
          <Title
            style={{
            fontSize: 20,
            color: 'black'
          }}>Notely</Title>
        </Body>

        <Right >
          <TouchableHighlight
            onPress={this
            .addNewNote
            .bind(this)}>
            <Image
              source={require("../images/create.png")}
              style={{
              width: 20,
              height: 20,
              marginRight: 20
            }}></Image>
          </TouchableHighlight>

          <TouchableHighlight onPress={console.log('onfilter')}>
            <Image
              source={require("../images/filter.png")}
              style={{
              width: 20,
              height: 20
            }}></Image>
          </TouchableHighlight>
        </Right>
      </Header>
    )
  }

  render() {
    return (
      <Container style={styles.allNotesContainer}>
        {this.renderHeader()}
        <Content >
          {this.renderList()}
        </Content>
      </Container>
    )
  }

  addNewNote() {
    this
      .props
      .navigator
      .navigate("NewNote")
  }

  goToNote(noteId, title, description, time) {
    this
      .props
      .navigator
      .navigate("SingleNote", {
        noteId: noteId,
        title: title,
        description: description,
        time: time
      })

  }

  longPressNote(noteId) {
    Alert.alert('Delete Note', 'Do you want to delete this note?', [
      {
        text: 'YES',
        onPress: () => this.deleteNote(noteId)
      }, {
        text: 'No'
      }
    ])
  }

  deleteNote(noteId) {
    this
      .props
      .deleteNote(noteId)
  }

  renderList() {
    if (this.props.notes.length <= 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyList}>Add some notes</Text>
        </View>
      )
    } else {
      var ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      var dataSource = ds.cloneWithRows(this.props.notes) || []

      return (
        <ListView
          dataSource={dataSource}
          renderRow={(note, sectionID, rowID) => {
          return (<Card
            time={note.time}
            title={note.title}
            description={note.description}
            id={note.id}
            keys={rowID}
            onPressBtn={this
            .goToNote
            .bind(this)}
            onLongPressBtn={this
            .longPressNote
            .bind(this)}/>)
        }}/>
      )
    }
  }
}

function mapStateToProps(state) {
  return {notes: state.allNotes}
}

export default connect(mapStateToProps, {deleteNote})(AllNotes)