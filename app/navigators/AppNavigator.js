import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { Button, Image, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';

import MenuTabScreen from '../components/MenuTab';
import MenuTabDetailScreen from '../components/MenuTab/menuDetail';
import ItemDetailScreen from '../components/MenuTab/itemDetail';

import ShoppingCartTabScreen from '../components/ShoppingCartTab';
import ProfileTabScreen from '../components/ProfileTab';

import LoginScreen from '../components/LoginScreen';
//import MainScreen from '../components/MainScreen';
//import ProfileScreen from '../components/ProfileScreen';

class MyHomeScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Home',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Icon name='home' style={{ color: tintColor }} />
		),
	};

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="Go to notifications"
			/>
		);
	}
}

class MyNotificationsScreen extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Notifications',
		tabBarIcon: ({ tintColor }) => (
			<Icon name='home' style={{ color: tintColor }} />
		),
	};

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.goBack()}
				title="Go back home"
			/>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26,
	},
});

export const MenuTab = StackNavigator({
	MenuTabScreen: { screen: MenuTabScreen },
	MenuTabDetailScreen: { screen: MenuTabDetailScreen },
	ItemDetailScreen: { screen: ItemDetailScreen },

});

export const ShoppingCartTab = StackNavigator({
	ShoppingCartScreen: { screen: ShoppingCartTabScreen },
});

export const ProfileTab = StackNavigator({
	ProfileTabScreen: { screen: ProfileTabScreen },
});

const MyApp = TabNavigator({
	MenuTab: {
		screen: MenuTab,
	},
	ShoppingCart: {
		screen: ShoppingCartTab,
	},
	ProfileTab: {
		screen: ProfileTab,
	},
}, {
		tabBarOptions: {
			activeTintColor: '#e91e63',
		},
	});


export const AppNavigator = StackNavigator({
	Login: { screen: LoginScreen },
	Profile: { screen: MyApp },
}, {
		headerMode: 'none',
		mode: 'card',
	});

const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);