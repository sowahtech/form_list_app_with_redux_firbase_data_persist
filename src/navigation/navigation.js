import { Logs } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ContactsScreen from '../screens/ContactsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import {logout} from '../redux/actions/authActions'

const Stack = createStackNavigator();

function AppContainer({ auth, logout }) {
    return (

        <NavigationContainer>
            {
                auth.login ?
                <Stack.Navigator>
                    <Stack.Screen
                        name='contacts'
                        component={ContactsScreen}
                        options={{
                            headerRight:()=>(
                                <TouchableOpacity
                                style={{marginRight: 20}}
                                onPress= {logout}>
                                    <Text>Logout</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    </Stack.Navigator>
                    :
                <Stack.Navigator>
                    <Stack.Screen
                        name='login'
                        component={LoginScreen}
                        options={{ header: () => null }}
                    />
                    <Stack.Screen
                        name='register'
                        component={SignUp}
                        options={{ header: () => null }} />
                </Stack.Navigator>
            }
        </NavigationContainer>

    );
}

const mapStateToProp = (state) => {
    return { auth: state }
}

export default connect(mapStateToProp, {logout})(AppContainer);
