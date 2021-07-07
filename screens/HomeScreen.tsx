import React, { useContext } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtil';
import { LoginContext } from '../utils/LoginProvider';

export default function HomeScreen() {
    const {user} = useContext(LoginContext);

    const signOut = () => {
        FirebaseUtil.signOut().catch((e) => {
            console.log(e);
            alert('Something went wrong!');
        });
    };

    return (
        <View style={styles.container}>
            <Text>Home - {user?.email}</Text>
            <Button onPress={()=> signOut()} title="Logout"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
    } 
 });
