import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import {connect} from 'react-redux'
import {loginEmailAccount} from '../redux/actions/authActions'

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleUpdateState=(name,value)=>{
        this.setState({
            [name]:value
        });
    }

    handleOnSubmit=()=>{
        
        this.props.loginEmailAccount(this.state.email, this.state.password)
    }

    render() {

        const {navigation, auth} = this.props

        return (
            <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.LoginText}>Log in</Text>
                </View>

                {auth.error.login &&<Text style={{color:'red'}}>{auth.error.login}</Text>}

                <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#666667'
                        placeholder='Email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={(text)=>{
                            this.handleUpdateState('email',text)}}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#666667'
                        secureTextEntry={true}
                        placeholder='Password'
                        value={this.state.password}
                        onChangeText={(text)=>{
                            this.handleUpdateState('password',text)}}
                    />
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={()=>{this.handleOnSubmit()}}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 150
    },
    LoginText: {
        fontSize: 50,
        color: "#762f9b"
    },
    loginTextContainer: {
        marginBottom: 30
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#762f9b",
        fontSize: 20,
        height: 50,
        marginTop: 30
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: '#4882f0'
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#762f9b',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 60
    },
    buttonText: {
        color: 'white',
        fontSize: 26
    },
    noAccountContainer: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    noAccountText: {
        marginRight: 10,
        fontSize: 16
    },
    signupText: {
        fontSize: 16,
        color: '#762f9b'
    }
});

const mapStateToProp = (state)=>{
    return {auth:state}
}

export default connect(mapStateToProp,{loginEmailAccount})(LoginScreen);