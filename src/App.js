
import React, {Component} from 'react'
import {View} from 'react-native'
import firebase from '@firebase/app'
import {Header} from './components/common'
import LoginForm from './components/LoginForm'


var config = {
    apiKey: 'AIzaSyAjQn2PG1I10Ghj5zgLot1s-pQKd7pEgf8',
    authDomain: 'authentication-7d636.firebaseapp.com',
    databaseURL: 'https://authentication-7d636.firebaseio.com',
    projectId: 'authentication-7d636',
    storageBucket: 'authentication-7d636.appspot.com',
    messagingSenderId: '563162128281'
};

firebase.initializeApp(config);

class App extends Component {

    render() {
        return (
            <View >
                <Header headerText='SkillQuizs' />
                <LoginForm  />
            </View>
        )
    }
}




export default App