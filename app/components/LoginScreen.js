import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const LoginScreen = ({ navigation }) => (

	<View style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' }} >
		<Button
		 style={{alignSelf:'center'}}
			onPress={() => navigation.dispatch({ type: 'Profile' })}>
			<Text>Login</Text>
		</Button>
	</View>

);

const styles = ({
	container: {
		flex: 1,
	},
	paragraph: {
		flex: 1,
		height: 200,
		justifyContent: 'center',
	},
	backdropView: {
		flex: 1,
		opacity: 0.2,
		backgroundColor: 'black',
		alignItems: 'center',
	},
	backdropText: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',

	},
	overlay: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		opacity: 0.4,

	},
	headLine: {
		fontSize: 60,
		textAlign: 'center',
		backgroundColor: 'transparent',
		color: 'white'
	},
	subLine: {
		fontSize: 30,
		textAlign: 'center',
		backgroundColor: 'transparent',
		color: 'white'
	}

});

LoginScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
	title: 'Log In',
};

export default LoginScreen;