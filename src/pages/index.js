import {StackNavigator} from 'react-navigation'
import home from './home'
import NewNote from '../components/NewNote';
import SingleNote from '../components/ViewSingleNote'

export default StackNavigator({
  Home: {
    screen: home
  },
  NewNote: {
    screen: NewNote
  },
  SingleNote: {
    screen: SingleNote
  }

})