import React, { Component} from 'react';
import { View, StyleSheet } from 'react-native';

export default class LoginForm extends Component {
	render(){
		return(
			<View style={ style.container}></View>
			);

	}
}

const style = StyleSheet.create({
	container: {
		padding: 20,
		backgroundcolor: '#05b3ff'
	}
});