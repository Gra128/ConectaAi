import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoadingScreen } from './LoadingScreen';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';
import { DetalhesOlimpia } from './DetalhesOlimpia';
import { PontoTuristico1 } from './PontoTuristico1';
import { PontoTuristico2 } from './PontoTuristico2';
import { PontoTuristico3 } from './PontoTuristico3';
import { PontoTuristico4 } from './PontoTuristico4';
import { PontoTuristico5 } from './PontoTuristico5';
import { PontoTuristico6 } from './PontoTuristico6';
import { GaleriaDeImagens1 } from './GaleriaDeImagens1';
import { GaleriaDeImagens2 } from './GaleriaDeImagens2';
import { GaleriaDeImagens3 } from './GaleriaDeImagens3';
import { GaleriaDeImagens4 } from './GaleriaDeImagens4';
import { GaleriaDeImagens5 } from './GaleriaDeImagens5';
import { GaleriaDeImagens6 } from './GaleriaDeImagens6';
import { MapScreen1 } from './MapScreen1';
import { MapScreen2 } from './MapScreen2';
import { MapScreen3 } from './MapScreen3';
import { MapScreen4 } from './MapScreen4';
import { MapScreen5 } from './MapScreen5';
import { MapScreen6 } from './MapScreen6';
import { Atracoes } from './Atracoes';





const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetalhesOlimpia" component={DetalhesOlimpia} options={{ title: 'Detalhes sobre Olímpia - SP' }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detalhes sobre Olímpia - SP' }} />
        <Stack.Screen name="Atracoes" component={Atracoes} options={{ title: 'Atrações turísticas' }} />
        <Stack.Screen name="GaleriaDeImagens1" component={GaleriaDeImagens1} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="GaleriaDeImagens2" component={GaleriaDeImagens2} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="GaleriaDeImagens3" component={GaleriaDeImagens3} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="GaleriaDeImagens4" component={GaleriaDeImagens4} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="GaleriaDeImagens5" component={GaleriaDeImagens5} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="GaleriaDeImagens6" component={GaleriaDeImagens6} options={{ title: 'Galeria de imagens' }} />
        <Stack.Screen name="PontoTuristico1" component={PontoTuristico1} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico2" component={PontoTuristico2} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico3" component={PontoTuristico3} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico4" component={PontoTuristico4} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico5" component={PontoTuristico5} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="PontoTuristico6" component={PontoTuristico6} options={{ title: 'Detalhes do ponto turístico' }} />
        <Stack.Screen name="MapScreen1" component={MapScreen1} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen2" component={MapScreen2} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen3" component={MapScreen3} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen4" component={MapScreen4} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen5" component={MapScreen5} options={{ title: 'Localização' }} />
        <Stack.Screen name="MapScreen6" component={MapScreen6} options={{ title: 'Localização' }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



