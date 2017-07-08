import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon, View, Thumbnail, Button, ListItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItemToCart } from './action';


class ItemDetailScreen extends Component {
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

	render() {
		const { activeItem } = this.props;
		activeItem.quantity = 1;
		return (
			<Container>
				<Content>
					<CardItem cardBody >
						<Image source={{ uri: activeItem.image }} style={styles.paragraph}>
							<View style={styles.backdropView}>
							</View>
							<View style={styles.overlay} ></View>
							<View style={styles.backdropText}>
								<Text style={styles.headLine}>BURGER</Text>
								<Text style={styles.subLine}>$ 10</Text>
							</View>
						</Image>
					</CardItem>
					<Card>
						<CardItem>
							<Body>

								<Text>
									Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                </Text>
							</Body>
						</CardItem>
						<CardItem>
							<Button onPress={() =>  this.props.addItemToCart(activeItem)} style={{ flex: 1 }} block success >
							
            <Icon active name='cart' />
								<Text>ADD TO CART</Text>
							</Button>
						</CardItem>
					</Card>
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
		height: 150,
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
		alignItems: 'flex-start',
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
		fontSize: 30,
		textAlign: 'left',
		backgroundColor: 'transparent',
		color: 'white',
		left: 10,
		top: 20,
	},
	subLine: {
		fontSize: 20,
		color: 'green',
		textAlign: 'left',
		backgroundColor: 'transparent',
		left: 10,
		top: 20,

	}

});
function mapStateToProps(state) {
	return { activeItem: state.activeMenu.activeItem };
}


function matchDispatchToProps(dispatch) {
	return bindActionCreators({ addItemToCart }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(ItemDetailScreen);