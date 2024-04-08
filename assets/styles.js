import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Org y foto
  rectangle: {
    margin: 10,
    width: 370,
    height: 155,
    backgroundColor: 'white',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  rectangleText: {
    marginRight:180,
    fontSize: 18,
    fontWeight: 'Lato',
    color: '#333',
  },

  rectangleText3: {
    marginRight:200,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  rectangleText4: {
    marginRight:250,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  
  //nutrican Control
  rectangle2: {
    marginTop: 50,
    width: 130,
    height: 50,
    backgroundColor: 'white',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rectangleText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  //grafica
  rectangle3: {
    margin: 10,
    width: 370,
    height: 240,
    backgroundColor: 'white',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  //botones
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },

  //nosotros
  container3: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 10,
    textAlign: 'justify',
    fontWeight: 'Nunito',
    
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    marginRight:100,
  },

  icon: {
    marginBottom: 5,
    marginRight: 280,
    backgroundColor:'rgba(100, 149, 237, 1)',
    padding: 10,
    borderRadius: 20, 
  },

  image2: {
    width: 140,
    height: 140,
    marginLeft: -100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgray',
    shadowColor: '#000',
    margin: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  imageNosotros: {
    width: 200,
    height: 200,
    marginLeft: 80,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightgray',
    shadowColor: '#000',
    margin:20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
  
});
