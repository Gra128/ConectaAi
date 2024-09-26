import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Dados das cidades
const data = [
  {
    id: 1,
    title: 'Olímpia - SP',
    description: 'Descrição Olímpia',
    imageUrl: require('./assets/imagens/image1.jpeg'),
    logoUrl: [require('./assets/imagens/condumax e incesa-transparente.png')],
    screen: 'DetalhesOlimpia',
    logoStyle: 'olimpiaLogo', // Referência ao estilo de Olímpia
  },
  {
    id: 2,
    title: 'Diadema - SP',
    description: 'Descrição Diadema',
    imageUrl: null,
    logoUrl: [
      require('./assets/imagens/logfarma-transparente.png'),
      require('./assets/imagens/lbgs-transparente.png'),
      require('./assets/imagens/acz-transparente.png'),
    ],
    screen: null,
    logoStyle: 'diademaLogo', // Referência ao estilo de Diadema
  },
  {
    id: 3,
    title: 'Iacanga - SP',
    description: 'Descrição Iacanga',
    imageUrl: null,
    logoUrl: [require('./assets/imagens/serve-transparente.png')],
    screen: null,
    logoStyle: 'iacangaLogo', // Referência ao estilo de Iacanga
  },
];

export function HomeScreen() {
  const navigation = useNavigation();

  const handleCardPress = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cidades',
    });
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#0084CA', '#702F8A', '#565294']}
      style={styles.backgroundGradient}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => handleCardPress(item.screen)}
            >
              <View style={styles.leftColumn}>
                {item.imageUrl ? (
                  <View style={styles.circleContainer}>
                    <Image
                      source={item.imageUrl}
                      style={styles.cityImage}
                      resizeMode="cover"
                    />
                  </View>
                ) : (
                  <View style={styles.circleContainer}>
                    <Text style={styles.developmentText}>Cidade em Desenvolvimento</Text>
                  </View>
                )}
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.logosContainer}>
                  {item.logoUrl.map((logo, index) => (
                    <Image
                      key={index}
                      source={logo}
                      style={styles[item.logoStyle]} // Usa o estilo apropriado
                      resizeMode="contain"
                    />
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    padding: Dimensions.get('window').width * 0.04,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: Dimensions.get('window').height * 0.1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginBottom: Dimensions.get('window').width * 0.00, // Reduzido o espaçamento inferior entre os cartões
    padding: Dimensions.get('window').width * 0.05,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: Dimensions.get('window').width * 0.09, // Mantém o espaçamento superior
  },
  leftColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Dimensions.get('window').width * 0.04,
  },
  rightColumn: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: Dimensions.get('window').width * 0.02,
  },
  logosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  olimpiaLogo: {
    width: Dimensions.get('window').width * 0.50,
    height: Dimensions.get('window').width * 0.13,
  },
  diademaLogo: {
    width: Dimensions.get('window').width * 0.16,
    height: Dimensions.get('window').width * 0.12,
  },
  iacangaLogo: {
    width: Dimensions.get('window').width * 0.20,
    height: Dimensions.get('window').width * 0.16,
  },
  circleContainer: {
    width: Dimensions.get('window').width * 0.23,
    height: Dimensions.get('window').width * 0.23,
    borderRadius: Dimensions.get('window').width * 0.115,
    overflow: 'hidden', // Garante que a imagem não ultrapasse o círculo
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    position: 'relative', // Adiciona posição relativa
  },
  cityImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Adiciona posição absoluta
    top: 0,
    left: 0,
    resizeMode: 'cover', // Faz com que a imagem cubra o círculo
  },
  developmentText: {
    color: '#808080',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;


