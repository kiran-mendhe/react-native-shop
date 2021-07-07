import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginProvider from './utils/LoginProvider';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
export default function AppStack() {

    const {user, isLoading} = useContext(LoginProvider);

    return (
    <NavigationContainer>
        <Stack.Navigator>
            {isLoading 
            ? (<Stack.Screen 
                name="Loading" 
                options={{headerShown: false}} 
                component={LoadingScreen} />)
            : user 
                ? (<Stack.Screen name="Home" component={HomeScreen} />)
                : (<Stack.Screen name="singin" component={LoginScreen} />)
            }
        </Stack.Navigator>
    </NavigationContainer>
    );
}
