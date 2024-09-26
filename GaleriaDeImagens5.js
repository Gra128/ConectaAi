import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Modal, Image, TouchableWithoutFeedback, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importar o LinearGradient
import { Ionicons } from '@expo/vector-icons'; // Importar ícones para as setas

const images = [
    require('./assets/imagens/galeria/5/imagem1.jpg'),
    require('./assets/imagens/galeria/5/imagem2.jpg'),
    require('./assets/imagens/galeria/5/imagem3.jpg'),
    require('./assets/imagens/galeria/5/imagem4.jpg'),
];

export const GaleriaDeImagens5 = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [modalVisible, setModalVisible] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0); // Índice da imagem selecionada
    const flatListRef = useRef(null);

    const handleImagePress = (index) => {
        setCarouselIndex(index);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleNextImage = () => {
        if (carouselIndex < images.length - 1) {
            setCarouselIndex(carouselIndex + 1);
            flatListRef.current.scrollToIndex({ index: carouselIndex + 1 });
        }
    };

    const handlePrevImage = () => {
        if (carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1);
            flatListRef.current.scrollToIndex({ index: carouselIndex - 1 });
        }
    };

    const renderImageItem = ({ item }) => (
        <Image source={item} style={styles.modalImage} />
    );

    return (
        <LinearGradient
            colors={['#0084CA', '#702F8A', '#565294']} // Cores do gradiente
            style={styles.backgroundGradient}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Santuário de Nossa Senhora Aparecida</Text>

                <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={handleCloseModal}
                    animationType="fade"
                >
                    <TouchableWithoutFeedback onPress={handleCloseModal}>
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContent}>
                                <FlatList
                                    ref={flatListRef}
                                    data={images}
                                    renderItem={renderImageItem}
                                    horizontal
                                    pagingEnabled
                                    keyExtractor={(item, index) => index.toString()}
                                    showsHorizontalScrollIndicator={false}
                                    initialScrollIndex={carouselIndex}
                                    onScrollToIndexFailed={() => { }}
                                />
                                <TouchableOpacity style={styles.arrowButtonLeft} onPress={handlePrevImage}>
                                    <Ionicons name="arrow-back" size={32} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.arrowButtonRight} onPress={handleNextImage}>
                                    <Ionicons name="arrow-forward" size={32} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.imageContainer}>
                        {images.map((image, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                                <Image
                                    source={image}
                                    style={styles.galleryImage}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

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
    backgroundGradient: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
    modalContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    modalImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'contain',
    },
    scrollView: {
        marginVertical: '5%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    galleryImage: {
        width: Dimensions.get('window').width * 0.42,
        height: Dimensions.get('window').width * 0.3,
        marginBottom: Dimensions.get('window').width * 0.05,
        marginRight: '2.7%',
        marginLeft: '2.7%',
        borderRadius: 10,
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

export default GaleriaDeImagens5;