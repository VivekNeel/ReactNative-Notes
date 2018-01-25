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
    fontSize: 13,
    marginLeft: 40,
    color: Constants.COLOR_GRAY
  },
  editModeTitle: {
    marginTop: 40,
    marginLeft: 40,
    width: 250,
    fontWeight: 'bold',
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
    marginBottom: 150
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#212121',
    marginTop: 40
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
    color: Constants.COLOR_DARK_GRAY
  },
  headerBack: {
    marginTop: 15
  },
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

  image: {
    width: 30,
    height: 30,
    marginRight: 15
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 5,
    flex: 1,
    color: '#000000',
    marginLeft: 20
  },
  cardDescriptionContainer: {},
  cardDescription: {
    fontSize: 15,
    flex: 1,
    color: Constants.COLOR_DARK_GRAY,
    marginBottom: 5,
    flexDirection: 'column',
    marginLeft: 20
  },
  cardTime: {
    fontSize: 13,
    color: Constants.COLOR_GRAY,
    marginBottom: 5,
    flexDirection: 'column',
    marginLeft: 20
  },
  applyButton: {
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    width: 100,
    height: 40,
    alignSelf: 'center'
  },
  applyText: {
    color: 'white'
  }
}