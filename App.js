import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Navbar from './navbar';
import {styles} from './assets/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [currentView, setCurrentView] = useState(1);
  const [dogImageUrl, setDogImageUrl] = useState(null);

    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
        const data = await response.json();
        if (data && data.length > 0) {
          const imageUrl = data[0].url;
          setDogImageUrl(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

  const switchToView1 = () => {
    setCurrentView(1)
    fetchDogImage();
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
      <FontAwesome name="heartbeat" size={24} color="black" style={styles.icon} />
        <Text style={styles.rectangleText3}>Cantidad de Alimento Total</Text>
        <Text style={styles.subtitle}>Alimento: 2000 kg</Text>
      </View>
      <View style={styles.rectangle}>
        <Ionicons name="eye" size={24} color="black" style={styles.icon} />
        <Text style={styles.rectangleText3}>Cantidad de Alimento Consumido</Text>
        <Text style={styles.subtitle}>Alimento: 350 grs</Text>
      </View>
      <View style={styles.rectangle3}>
      <MaterialCommunityIcons name="dog" size={24} color="black" style={styles.icon} />
        <Text style={styles.rectangleText4}>Tu Perro es:</Text>
        {dogImageUrl && (
                <Image
                source={{ uri: dogImageUrl }}
                style={styles.image2}
              />
              )}
        <Text style={styles.subtitle}>dog</Text>
      </View>
          </View>
        ) : (
          <View style={styles.innerContainer}>
                <View style={styles.container3}>
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Image
  source={require('./assets/chucho.jpg')}
  style={styles.imageNosotros}/>
      <Text>
      Somos estudiantes en desarrollo de software apasionados por la creación de innovaciones
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
