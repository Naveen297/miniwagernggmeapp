import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GameCard = ({ game, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: game.image }} style={styles.image} />
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4,
    },
});

export default GameCard;
