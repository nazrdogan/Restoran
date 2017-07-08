import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon, View, Thumbnail, Button, ListItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItemToCart } from '../MenuTab/action';
import SimpleStepper from 'react-native-simple-stepper';
import { updateCount } from './action';


class ShoppingCartTab extends Component {

	state = {
		list: [],
	};
	static navigationOptions = {
		tabBarLabel: 'Shopping Cart',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Icon name='cart' style={{ color: tintColor }} />
		),
	};
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps");

		this.setState((prevState, props) => {
			return { list: nextProps.shoppingCart.list};
		});
	}
	valueChanged(value, index) {
		const displayValue = value.toFixed(2)
		if (displayValue > 0) {
			this.props.updateCount(index, value);
		}

	}
	renderList() {
		return (
			<FlatList
				keyExtractor={(item, index) => index}
				data={this.props.shoppingCart.list}
				extraData={this.state}
				renderItem={({ item, index }) =>
					<Card>

						<CardItem>
							<Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
							<Body style={{ justifyContent: 'space-around', alignItems: 'center' }} >
								<Text>{item.title} </Text>
								<Text style={{ color: 'green', fontSize: 20 }} > $ 10 X {item.quantity} </Text>
								<SimpleStepper maximumValue={9999999999} valueChanged={(value) => this.valueChanged(value, index)} />
							</Body>
							<Right >
								<Icon style={{ fontSize: 30 }} onPress={() => this.props.removeItemToCart(item)} active name="trash" />
							</Right>
						</CardItem>
					</Card>
				}
			/>
		);
	}
	render() {
		return (
			<Container>
				<Content>
					{
						this.props.shoppingCart.list !== undefined && this.props.shoppingCart.list.length > 0 ? this.renderList() : null
					}
				</Content>
			</Container>
		);
	}
}
const styles = ({
	icon: {
		width: 26,
		height: 26,
	},
});


function mapStateToProps(state) {
	return { shoppingCart: state.shoppingCart };
}


function matchDispatchToProps(dispatch) {
	return bindActionCreators({ removeItemToCart, updateCount }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ShoppingCartTab);