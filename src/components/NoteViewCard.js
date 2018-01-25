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
import {styles} from '../components/styles'

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
      <Swipeout autoClose={true} left={buttons}>
        <TouchableOpacity onPress={this
          .handleGoto
          .bind(this)}>
          <View style={[styles.cardContainer, background]}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle} numberOfLines={1}>
                {note.title}
              </Text>

              <View style={styles.imageContainer}>
                {star}
                {fav}
              </View>

            </View>
            <View style={styles.cardDescriptionContainer}>
              <Text style={styles.cardDescription} ellipsizeMode={'tail'} numberOfLines={1}>
                {note.description}
              </Text>
              <Text style={styles.cardTime}>{note.time}
              </Text>
            </View>

          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }

}
