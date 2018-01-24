import React, {Component, PureComponent} from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import * as Constants from '../constants'
import Swipeout from 'react-native-swipeout';

const images = [require("../images/star_selected.png"), require("../images/star.png"), require("../images/fav_selected.png"), require("../images/fav.png")]

export default class NoteViewCard extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      starSelected: false,
      favSelected: false
    }
  }
  handleDeletePress() {
    console.log('delete pressed')
    this
      .props
      .onDeletePressed(this.props.note.id)
  }

  handleGoto() {
    this
      .props
      .onPressBtn(this.props.note)
  }

  render() {
    const {note, keys} = this.props

    const background = (keys % 2 == 0)
      ? {
        backgroundColor: '#ffffff'
      }
      : {
        backgroundColor: '#f2f2f2'
      }
    let star = null
    if (note.markedStarred || this.state.starSelected) {
      star = <TouchableHighlight
        onPress={() => {
        this
          .props
          .addStarredNote(this.props.note);
        this.setState({starSelected: true})
      }}>
        <Image source={images[0]} style={styles.image}></Image>
      </TouchableHighlight>

    } else {
      star = <TouchableHighlight
        onPress={() => {
        this
          .props
          .addStarredNote(this.props.note);
        this.setState({starSelected: true})
      }}>
        <Image source={images[1]} style={styles.image}></Image>
      </TouchableHighlight>

    }

    let fav = null
    if (note.markedFav || this.state.favSelected) {
      fav = <TouchableHighlight
        onPress={() => {
        this
          .props
          .addFavNote(this.props.note);
        this.setState({favSelected: true})
      }}>
        <Image source={images[2]} style={styles.image}></Image>
      </TouchableHighlight>

    } else {
      fav = <TouchableHighlight
        onPress={() => {
        this
          .props
          .addFavNote(this.props.note);
        this.setState({favSelected: true})
      }}>
        <Image source={images[3]} style={styles.image}></Image>
      </TouchableHighlight>

    }

    let buttons = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => {
          this
            .props
            .onDeletePressed(this.props.note.id)
        }
      }
    ];

    return (
      <Swipeout
        autoClose={true}
        onClose={() => console.log('===close')}
        left={buttons}>
        <TouchableOpacity onPress={this
          .handleGoto
          .bind(this)}>
          <View style={[styles.cardContainer, background]}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle} numberOfLines={1}>
                {note
                  .title
                  .toUpperCase()}
              </Text>

              <View style={styles.imageContainer}>
                {star}
                {fav}
              </View>

            </View>
            <View style={styles.cardDescriptionContainer}>
              <Text style={styles.cardDescription} numberOfLines={2}>
                {(note.description.length > 150)
                  ? note.description.slice(0, 150) + '...'
                  : note.description}
              </Text>
              <Text style={styles.cardDescription}>{note.time}
              </Text>
            </View>

          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }

}

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: Constants.COLOR_GRAY
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 5,
    flex: 1,
    color: '#000000',
    marginLeft: 20
  },
  cardDescriptionContainer: {},
  cardDescription: {
    fontSize: 13,
    color: '#BDBDBD',
    marginBottom: 5,
    flexDirection: 'column',
    marginLeft: 20
  },
  image: {
    width: 20,
    height: 20
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})