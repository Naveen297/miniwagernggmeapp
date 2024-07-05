import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameDetail = ({ route, navigation }) => {
    const { game } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Button title="Join Game" onPress={() => navigation.navigate('Dashboard', { game })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default GameDetail;
