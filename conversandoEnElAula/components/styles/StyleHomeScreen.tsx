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
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    margin: 5,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Pacifico_400Regular',
  },
  exitSection: {
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  exitText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Pacifico_400Regular',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    margin: 5,
    width: '30%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  faIcon: {
    color: 'white',
  }
});



