import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 2,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 60, 
  
  },
  buttonLanguage: {
    backgroundColor: 'rgba(53, 167, 255, 0.2);',
    borderColor: 'black',
    margin: 5,
    width: '30%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCategory: {
    backgroundColor: 'rgba(107, 241, 120, 0.2);',
    borderColor: 'white',
    margin: 5,
    width: '30%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonObject: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    margin: 5,
    width: '30%',
    padding: 5,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: "CabinSketch_700Bold",
  },
  exitSection: {
    width: '90%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 100,
  },
  exitText: {
    color: 'white',
    fontFamily: "CabinSketch_700Bold",
    fontSize: 18,
    width: '70%',
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    margin: 5,
    padding: 10,
    width: '30%',
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonImageIconStyle: {
    padding: 5,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  buttonImageIcon: {
    margin: 4,
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  faIcon: {
    color: 'white',
  }
});



