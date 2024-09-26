import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Modal, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importar o LinearGradient
import { Ionicons } from '@expo/vector-icons'; // Importar ícones

const images = [
    require('./assets/imagens/galeria/2/imagem1.jpg'),
    require('./assets/imagens/galeria/2/imagem2.jpg'),
    require('./assets/imagens/galeria/2/imagem3.jpg'),
    require('./assets/imagens/galeria/2/imagem4.jpg'),
];

export const GaleriaDeImagens2 = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0); // Índice da imagem selecionada
    const flatListRef = useRef(null);

    const handleImagePress = (index) => {
        setSelectedIndex(index);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleNextImage = () => {
        if (selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1);
            flatListRef.current.scrollToIndex({ index: selectedIndex + 1 });
        }
    };

    const handlePrevImage = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
            flatListRef.current.scrollToIndex({ index: selectedIndex - 1 });
        }
    };

    // Método getItemLayout para o FlatList
    const getItemLayout = (data, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index,
    });

    const renderImageItem = ({ item }) => (
        <Image source={item} style={styles.modalImage} />
    );

    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']} // Cores do gradiente
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Coreto da Praça Rui Barbosa</Text>

                <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={handleCloseModal}
                    animationType="fade"
                >
                    <TouchableWithoutFeedback onPress={handleCloseModal}>
                        <View style={styles.modalBackground}>
                            <FlatList
                                ref={flatListRef}
                                data={images}
                                renderItem={renderImageItem}
                                horizontal
                                pagingEnabled
                                keyExtractor={(item, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                getItemLayout={getItemLayout}
                                initialScrollIndex={selectedIndex}
                                onScrollToIndexFailed={({ index, highestMeasuredFrameIndex }) => {
                                    if (index > highestMeasuredFrameIndex) {
                                        flatListRef.current.scrollToIndex({ index: highestMeasuredFrameIndex });
                                    } else {
                                        flatListRef.current.scrollToIndex({ index });
                                    }
                                }}
                            />
                            <TouchableOpacity style={styles.arrowButtonLeft} onPress={handlePrevImage}>
                                <Ionicons name="arrow-back" size={32} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.arrowButtonRight} onPress={handleNextImage}>
                                <Ionicons name="arrow-forward" size={32} color="white" />
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <FlatList
                    data={images}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                            <Image
                                source={item}
                                style={styles.galleryImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2} // Ajuste para exibir as imagens em duas colunas
                    contentContainerStyle={styles.galleryContainer} // Adiciona espaço e centraliza as imagens
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.firstButton]}
                        onPress={() => navigation.navigate('DetailsScreen')}
                    >
                        <Text style={styles.buttonText}>Pontos Turísticos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.secondButton]}
                        onPress={() => navigation.navigate('MapScreen1')}
                    >
                        <Text style={[styles.buttonText, styles.secondButtonText]}>Localização</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10, // Adiciona um pouco de espaço nas laterais
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        marginBottom: Dimensions.get('window').height * 0.1,
        marginTop: Dimensions.get('window').height * 0.05,
        fontWeight: '100',
        textShadowColor: 'rgba(55, 14, 67, 1)',
        textShadowOffset: { width: 0.2, height: 0.2 },
        textShadowRadius: 5,
        marginHorizontal: Dimensions.get('window').width * 0.03,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.8, // Ajuste para altura
        resizeMode: 'contain',
    },
    galleryImage: {
        width: Dimensions.get('window').width * 0.42,
        height: Dimensions.get('window').width * 0.3,
        marginBottom: Dimensions.get('window').width * 0.05, // 5% da largura da tela
        marginHorizontal: Dimensions.get('window').width * 0.02, // Espaço lateral entre as imagens
        borderRadius: 10,
    },
    galleryContainer: {
        justifyContent: 'center', // Centraliza as imagens
        alignItems: 'center', // Alinha as imagens no centro
    },
    buttonContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height * 0.04,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginHorizontal: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 1,
        paddingHorizontal: 20,
    },
    firstButton: {
        backgroundColor: '#0084CA',
        borderColor: 'white',
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.30,
    },
    secondButton: {
        backgroundColor: '#0084CA',
        borderColor: 'white',
        borderWidth: 1,
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.37,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    secondButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    arrowButtonLeft: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -16 }],
        zIndex: 1,
    },
    arrowButtonRight: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -16 }],
        zIndex: 1,
    },
});

export default GaleriaDeImagens2;