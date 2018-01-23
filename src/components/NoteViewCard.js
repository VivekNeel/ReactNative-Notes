import React, {Component, PureComponent} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import * as Constants from '../constants'

export default class NoteViewCard extends PureComponent {
  handleLongPress() {
    this
      .props
      .onLongPressBtn(this.props.id)
  }

  handleGoto() {
    this
      .props
      .onPressBtn(this.props.id, this.props.title, this.props.description, this.props.time)
  }
  render() {
    const {title, description, id, keys, time} = this.props
    console.log('here', this.props)

    const background = (keys % 2 == 0)
      ? {
        backgroundColor: '#ffffff'
      }
      : {
        backgroundColor: '#f2f2f2'
      }

    return (
      <TouchableOpacity
        onPress={this
        .handleGoto
        .bind(this)}
        onLongPress={this
        .handleLongPress
        .bind(this)}>
        <View style={[styles.cardContainer, background]}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {title.toUpperCase()}
            </Text>

            <View
              style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}>
              <Image source={require("../images/sfilled.png")} style={styles.image}></Image>
              <Image source={require("../images/ffilled.png")} style={styles.image}></Image>

            </View>

          </View>
          <View style={styles.cardDescriptionContainer}>
            <Text style={styles.cardDescription} numberOfLines={2}>
              {(description.length > 150)
                ? description.slice(0, 150) + '...'
                : description}
            </Text>
            <Text style={styles.cardDescription}>{time}
            </Text>
          </View>

        </View>
      </TouchableOpacity>
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
  }
})