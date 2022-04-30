import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c8e99'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  exitSection: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  exitText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'AlfaSlabOne_400Regular',
    textAlign: 'center',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: '30%',
    padding: 15,
    marginRight: 60,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonImageExit: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonImageVote: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginBottom: 600,    
  },
  tableCell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  tableHeaderText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'AlfaSlabOne_400Regular',
  }
});
