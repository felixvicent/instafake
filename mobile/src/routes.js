import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import New from './pages/New';
import Feed from './pages/Feed';

import logo from './assets/logo.png';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerTitle: props => <Image source={ logo } />
                }}
                mode='modal'
            >
                <AppStack.Screen
                    name="Feed"
                    component={ Feed }
                />
                <AppStack.Screen name="New" component={ New }/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}