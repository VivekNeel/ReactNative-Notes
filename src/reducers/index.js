import {combineReducers} from 'redux'
import NotesReducer from './noteReducer'
import CurrentNoteReducer from './singleNoteReducer'

const rootReducer = combineReducers({allNotes: NotesReducer, currentNote: CurrentNoteReducer})

export default rootReducer