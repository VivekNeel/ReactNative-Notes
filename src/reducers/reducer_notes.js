import _ from 'lodash'
import {ADD_NOTES, UPDATE_NOTE, DELETE_NOTE} from '../actions'

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
        console.log('newArr', data, action.payload)
        return data.id != action.payload.id
      });

      console.log('hello', newArray)

      const updatedNote = Object.assign({}, {
        id: newArray.length
      }, action.payload)
      const updatedState = [
        updatedNote, ...newArray
      ]
      return updatedState

    case DELETE_NOTE:
      const deletedNewArray = _.remove(state, (data) => {
        console.log('hello', data, action.payload);

        return data.id != action.payload
      });
      console.log('hello', deletedNewArray);
      return deletedNewArray

    default:
      return state
  }
}
