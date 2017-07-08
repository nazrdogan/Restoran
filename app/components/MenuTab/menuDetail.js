import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon, View, Thumbnail, Button, ListItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goItemDetail } from './action';

class MenuTabDetailScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'Menu',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Icon name='home' style={{ color: tintColor }} />
		),
	};
	componentDidMount() {
		const { itemID } = this.props.navigation.state.params;
		console.log(itemID);
	}
	onGoDetail(itemID) {
		this.props.goItemDetail(itemID);
	}
	render() {
		return (
			<Container>
				<Content>
					<FlatList
						keyExtractor={(item, index) => index}
						data={this.props.activeMenu.list}
						renderItem={({ item }) =>
							<Card>
								<TouchableOpacity activeOpacity={0.9} onPress={() => this.onGoDetail(item.id)} >
									<CardItem>
										<Thumbnail large square source={{ uri: item.image }} />
										<Body style={{ left: 10, justifyContent: 'space-around' }} >
											<Text>Sankhadeep</Text>
											<Text style={{ color: 'green' }} > $ 10</Text>
										</Body>
										<Right>
											<Icon active name="heart" />
										</Right>
									</CardItem>
								</TouchableOpacity>
							</Card>
						}
					/>
				</Content>
			</Container>

		);
	}
}

const styles = ({
});

function mapStateToProps(state) {
	return { activeMenu: state.activeMenu };
}


function matchDispatchToProps(dispatch) {
	return bindActionCreators({ goItemDetail }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MenuTabDetailScreen);