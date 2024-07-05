import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pedometer } from 'expo-sensors';

const Dashboard = ({ route }) => {
    const { game } = route.params;
    const [stepCount, setStepCount] = useState(0);

    useEffect(() => {
        const subscription = Pedometer.watchStepCount((result) => {
            setStepCount(result.steps);
        });

        Pedometer.isAvailableAsync().then(
            (result) => {
                if (!result) {
                    alert('Pedometer is not available on this device.');
                }
            },
            (error) => {
                alert('Pedometer not available: ' + error.message);
            }
        );

        return () => subscription && subscription.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Text style={styles.steps}>Steps: {stepCount}</Text>
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
    steps: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Dashboard;
