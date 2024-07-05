import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import GameCard from '../components/GameCard';
import { firestore } from '../firebase';

const GameFeed = ({ navigation }) => {
    const [games, setGames] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const querySnapshot = await firestore.collection('games').limit(10).get();
        const gamesArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setGames(gamesArray);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };

    const fetchMoreGames = async () => {
        const querySnapshot = await firestore.collection('games').startAfter(lastVisible).limit(10).get();
        const gamesArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setGames([...games, ...gamesArray]);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };

    const handleGamePress = (game) => {
        navigation.navigate('GameDetail', { game });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={games}
                renderItem={({ item }) => <GameCard game={item} onPress={() => handleGamePress(item)} />}
                keyExtractor={(item) => item.id}
                onEndReached={fetchMoreGames}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default GameFeed;
