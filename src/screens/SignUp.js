import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {createEmailAccount, registerError} from '../redux/actions/authActions'


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirm: ''
        }
    }

    handleUpdateState=(name,value)=>{
        this.setState({
            [name]:value
        });
    }

    handleOnSubmit=()=>{
        if(this.state.password!==this.state.confirm){
            this.props.registerError("Passwords do not match")
            return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
    }
    
    render() {
        const {navigation, auth} = this.props
        return (
            <ScrollView style={styles.container}>

                <View>
                    <Text style={styles.signup_text}>Sign up</Text>
                </View>

                <View>
                    {auth.error.register &&<Text style={{color:'red'}}>{auth.error.register}</Text>}

                    <TextInput
                        placeholder='Email'
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={(text)=>{
                            this.handleUpdateState('email',text)}}
                    />

                    <TextInput
                        placeholder='Password'
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={(text)=>{
                            this.handleUpdateState('password',text)}}
                    />

                    <TextInput
                        placeholder='Password again'
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.confirm}
                        onChangeText={(text)=>{
                            this.handleUpdateState('confirm',text)}}
                    />
                </View>

                <View>
                    <TouchableOpacity
                    onPress={() => this.handleOnSubmit()} 
                    style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.haveAccount}>You already have account?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 60
    },

    signup_text: {
        color: '#9705C3',
        fontSize: 50,
        marginVertical: 40
    },

    input: {
        fontSize: 26,
        borderBottomWidth: 2,
        borderBottomColor: '#9705C3',
        marginVertical: 35,
        paddingBottom: 5,
    },

    buttonContainer: {
        height: 40,
        backgroundColor: '#9705C3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

    questionContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginVertical: 30
    },

    haveAccount: {
        marginRight: 10,
        fontSize: 16
    },

    login: {
        fontSize: 16,
        color: '#9705C3'
    }

})

const mapStateToProp = (state)=>{
    return {auth:state}
}

export default connect(mapStateToProp, {createEmailAccount,registerError})(SignUp);