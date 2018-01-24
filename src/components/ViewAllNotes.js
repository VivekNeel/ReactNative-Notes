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
  Platform,
  ListView,
  ScrollView,
  Button,
  TouchableHighlight,
  Image
} from 'react-native'
import {connect} from 'react-redux'

import NewNote from './NewNote'
import SingleNote from './ViewSingleNote'
import Card from './NoteViewCard'
import {deleteNote, pushFavourite, getAllNotes} from '../actions'
import {styles} from './styles'
import * as Constants from '../constants'
import DrawerLayout from 'react-native-drawer-layout';

class AllNotes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      applyClicked: false,
      filterClicked: false,
      favouriteSelected: false,
      starredSelected: false
    }
  }
  renderHeader() {

    return (
      <Header
        androidStatusBarColor={Constants.COLOR_PRIMARY_DARK}
        style={{
        backgroundColor: Constants.COLOR_PRIMARY
      }}>
        {Platform.OS === "ios" && <Left >
          <Button
            title=""
            style={{
            backgroundColor: 'transparent'
          }}
            onPress={() => {
            console.log('button pressed')
          }}></Button>

        </Left>}

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

          <TouchableHighlight
            onPress={() => {
            if (this.drawer) 
              this.drawer.openDrawer()
          }}>
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
        {this.renderDrawer()}
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

  addFavNote(note) {
    note.markedFav = true
    this
      .props
      .pushFavourite(note)
  }

  addStarredNote(note) {
    note.markedStarred = true
    this
      .props
      .pushFavourite(note)
  }
  deleteNote(noteId) {
    this
      .props
      .deleteNote(noteId)
  }

  renderDrawer() {
    const navigationView = (
      <View style={[styles.container]}>
        <TouchableHighlight
          onPress={() => {
          this.setState({
            filterClicked: true,
            favouriteSelected: false,
            starredSelected: false
          }, () => {
            if (this.drawer) {
              this
                .drawer
                .closeDrawer()
            }
            this
              .props
              .getAllNotes()
          })
        }}>
          <Text style={styles.drawerContentText}>Filter X</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
          this.setState({
            favouriteSelected: !this.state.favouriteSelected
          })
        }}>
          <Text
            style={(this.state.favouriteSelected
            ? styles.drawerContentTextSelected
            : styles.drawerContentText)}>Favourite</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
          this.setState({
            starredSelected: !this.state.starredSelected
          })
        }}>
          <Text
            style={(this.state.starredSelected
            ? styles.drawerContentTextSelected
            : styles.drawerContentText)}>Starred</Text>
        </TouchableHighlight>
        <Button
          title="Apply"
          onPress={() => {
          this.setState({
            applyClicked: true
          }, () => {
            if (this.drawer) {
              this
                .drawer
                .closeDrawer()
            }
            this
              .props
              .getAllNotes()
          })
        }}></Button>

      </View>
    );

    return (
      <DrawerLayout
        drawerBackgroundColor="#212121"
        drawerWidth={300}
        ref={drawer => {
        return (this.drawer = drawer);
      }}
        keyboardDismissMode="on-drag"
        statusBarBackgroundColor="blue"
        renderNavigationView={() => navigationView}>
        {this.renderHeader()}
        {this.renderList()}
      </DrawerLayout>
    );
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
      var dataSource
      if (this.state.applyClicked) {

        if (this.state.favouriteSelected && this.state.starredSelected) {

          var filteredArray = this
            .props
            .notes
            .filter((item) => {
              return item.markedFav && item.markedStarred
            })
          dataSource = ds.cloneWithRows(filteredArray) || []
        } else if (this.state.favouriteSelected) {
          var a = this
            .props
            .notes
            .filter((item) => {
              return item.markedFav
            })
          dataSource = ds.cloneWithRows(a) || []
        } else if (this.state.starredSelected) {
          var filteredStarred = this
            .props
            .notes
            .filter((item) => {
              return item.markedStarred
            })
          dataSource = ds.cloneWithRows(filteredStarred) || []

        } else {
          dataSource = ds.cloneWithRows(this.props.notes) || []
        }
      } else {
        dataSource = ds.cloneWithRows(this.props.notes) || []
      }

      console.log(this.props.notes)

      return (
        <ListView
          dataSource={dataSource}
          renderRow={(note, sectionID, rowID) => {
          return (<Card
            time={note.time}
            title={note.title}
            description={note.description}
            id={note.id}
            note={note}
            addStarredNote={this
            .addStarredNote
            .bind(this)}
            addFavNote={this
            .addFavNote
            .bind(this)}
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

export default connect(mapStateToProps, {deleteNote, pushFavourite, getAllNotes})(AllNotes)