import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Button, Card, CardSection} from './common'


class LoginForm extends Component{
    constructor(props){

    }
    render(){
        return(
            <Card>
                <CardSection>
                 <TextInput value ={this.state.text} />
                </CardSection>
                <CardSection>
                    <Button>
                        Login in
                    </Button>
                </CardSection>
            </Card>
        )
    }

}



export default LoginForm;