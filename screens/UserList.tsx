import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function UserList({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const renderUser = ({ item }) => (
        <TouchableOpacity
            style={styles.userContainer}
            onPress={() => navigation.navigate('UserDetails', { user: item })}
        >
            <Text style={styles.userName}>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUser}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    userContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
