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
  normalTime: {
    fontSize: 10,
    marginLeft: 40,
    color: Constants.COLOR_GRAY
  },
  editModeTitle: {
    marginTop: 40,
    marginLeft: 40,
    width: 250,
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
    marginBottom: 120
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'red'
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
  },
  viewNoteDesc: {
    fontSize: 20,
    marginLeft: 50,
    marginRight: 20,
    marginTop: 20,
    color: Constants.COLOR_GRAY
  },
  headerBack: {
    marginTop: 10
  }
}