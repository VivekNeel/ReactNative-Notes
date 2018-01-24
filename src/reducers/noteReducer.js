import _ from 'lodash'
import {ADD_NOTES, UPDATE_NOTE, DELETE_NOTE, NOTE_FAVOURITE, NOTE_ALL} from '../actions'

const initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      const newNote = Object.assign({}, {
        id: state.length
      }, action.payload)
      const newState = [
        newNote, ...state
      ]
      return newState

    case UPDATE_NOTE:
      const newArray = _.remove(state, (data) => {
        return data.id != action.payload.id
      });

      const updatedNote = Object.assign({}, {
        id: newArray.length
      }, action.payload)
      const updatedState = [
        updatedNote, ...newArray
      ]
      return updatedState

    case NOTE_FAVOURITE:
      const a = Object.assign({}, {
        id: action.payload.length
      }, action.payload);
      return state

    case DELETE_NOTE:
      const deletedNewArray = _.remove(state, (data) => {

        return data.id != action.payload
      });
      return deletedNewArray

    case NOTE_ALL:
      console.log("teste")
      const aaa = [...state]
      console.log('note all', aaa);

      console.log('aaa', aaa);
      return aaa

    default:
      return state
  }
}
