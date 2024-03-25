import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Navbar from './navbar';
import {styles} from './assets/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [currentView, setCurrentView] = useState(1);

  const switchToView1 = () => {
    setCurrentView(1);
  };

  const switchToView2 = () => {
    setCurrentView(2);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        {currentView === 1 ? (
          <View style={styles.innerContainer}>
      <View style={styles.rectangle}>
        <Ionicons name="eye" size={24} color="black" style={styles.icon} />
        <Text style={styles.rectangleText3}>Org</Text>
        <Text style={styles.subtitle}>Cantidad de Alimento Total</Text>
      </View>
      <View style={styles.rectangle}>
        <Ionicons name="eye" size={24} color="black" style={styles.icon} />
        <Text style={styles.rectangleText3}>Org</Text>
        <Text style={styles.subtitle}>Cantidad de Alimento Consumido</Text>
      </View>
      <View style={styles.rectangle}>
        <Ionicons name="eye" size={24} color="black" style={styles.icon} />
        <Text style={styles.rectangleText}>Foto de un animalito</Text>
        <Text style={styles.subtitle}>Aqui mapearemos el api de animales</Text>
      </View>
          </View>
        ) : (
          <View style={styles.innerContainer}>
                <View style={styles.container3}>
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Image
  source={require('./assets/chucho.jpg')}
  style={{
    width: 200,
    height: 200,
    marginLeft: 80,
    borderRadius: 20,
    borderWidth: 2, // Agregamos un borde
    borderColor: 'lightgray', // Color del borde
    shadowColor: '#000', // Agregamos sombra
    margin:20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }}
/>
      <Text style={styles.paragraph}>
      Somo estudiantes en desarrollo de software apasionados por la creación de innovaciones
      </Text>
      <Text style={styles.paragraph}>
      </Text>
      <Text style={styles.paragraph}>
      </Text>
    </View>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={switchToView1}>
        <Text>
          <Icon name="home-outline" size={24} color="black" /> {/* Icono de casa */}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={switchToView2}>
        <Text>
          <Icon name="person-outline" size={24} color="black" /> {/* Icono de persona */}
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
