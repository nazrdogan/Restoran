import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon, View, Thumbnail, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goDetail } from './action';

class MenuTabScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'Menu',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Icon name='home' style={{ color: tintColor }} />
		),
	};
	onGoDetail(itemID) {
   this.props.goDetail(itemID);
	}
	render() {
		return (
			<Container>
				<Content>
					<FlatList
					keyExtractor={(item, index) => index}
						data={this.props.mainMenu}
						renderItem={({ item }) =>
							<Card>
								<TouchableOpacity activeOpacity={0.9} onPress={() => this.onGoDetail(item.id)} >
									<CardItem cardBody>
										<Image source={{ uri: item.image }} style={styles.paragraph}>
											<View style={styles.backdropView}>
											</View>
											<View style={styles.overlay} ></View>
											<View style={styles.backdropText}>
												<Text style={styles.headLine}>{item.title} </Text>
												<Text style={styles.subLine}>{item.subTitle} </Text>
											</View>
										</Image>
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
	icon: {
		width: 26,
		height: 26,
	},
	container: {
		flex: 1,
	},
	paragraph: {
		flex: 1,
		height: 180,
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
		fontSize: 40,
		textAlign: 'center',
		backgroundColor: 'transparent',
		color: 'white'
	},
	subLine: {
		fontSize: 20,
		textAlign: 'center',
		backgroundColor: 'transparent',
		color: 'white'
	}

});



function mapStateToProps(state) {
	return { mainMenu: state.mainMenu };
}


function matchDispatchToProps(dispatch) {
	return bindActionCreators({ goDetail }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MenuTabScreen);