import * as Constants from '../constants'
export const styles = {
  allNotesContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56
  },
  emptyList: {
    fontSize: 16
  },

  createNoteContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInputContainer: {
    flex: 1
  },
  inputTitleStyle: {
    height: 60,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    fontSize: 20
  },
  inputDescriptionStyle: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 60,
    fontSize: 16,
    textAlignVertical: 'top'
  },
  normalTitle: {},
  editModeTitle: {
    marginTop: 50,
    marginRight: 70,
    fontSize: 25,
    color: Constants.COLOR_BLACK
  },
  header: {
    backgroundColor: Constants.COLOR_PRIMARY
  },
  editModeHeader: {
    backgroundColor: Constants.COLOR_PRIMARY,
    height: 200
  },
  updateNormal: {},
  updateInEditMode: {
    color: Constants.COLOR_BLACK,
    marginBottom: 100
  },
  container: {
    flexDirection: 'column',
    flex: 1
  },

  drawerContentText: {
    margin: 20,
    color: 'white',
    alignSelf: 'center'
  },
  drawerContentTextSelected: {
    margin: 20,
    color: 'green',
    alignSelf: 'center'
  }
}