import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon, View, Thumbnail, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";


export default class ProfileTab extends Component {
	static navigationOptions = {
		tabBarLabel: 'Profile',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor }) => (
			<Icon name='person' style={{ color: tintColor }} />
		),
	};
	render() {
		return (
			<Container>
				<Content>

					<CardItem>
						<Grid>
							<Row size={75} style={{ alignItems: 'center', justifyContent: 'center' }} >
								<Thumbnail large source={{ uri: 'https://www.trickscity.com/wp-content/uploads/2016/11/1017479_632512943486420_22177501_n.jpg' }} />
							</Row>
							<Row size={25}>
								<Body style={{ flex: 1, alignItems: 'center' }} >
									<Text>NativeBase</Text>
									<Text style={{ alignItems: 'center', fontSize: 12 }}>Blabalbawewe</Text>
								</Body>
							</Row>
						</Grid>
					</CardItem>
					<CardItem>
						<Body>
							<Text>
								Lorem ipsum dolor sit amet, cum stet dolore dolores ea. No delectus omittantur cum. No corpora accusamus molestiae quo, doctus voluptatibus at qui, nam novum ponderum maluisset ne. Elitr alterum maiestatis qui ex, nam at errem doming, nec an euismod qualisque. Debet adolescens est ad.
                </Text>
						</Body>
					</CardItem>
					<CardItem>
						{/*
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<View style={{ flex:1, height: 50, backgroundColor: 'powderblue' }} />
								<View style={{ flex:1, height: 50, backgroundColor: 'skyblue' }} />
								
							</View>
							*/}

						<Grid style={{ flex: 1 }} >
							<Col style={{ flex: 1, alignItems: 'center' }} >
								<View>
									<Button iconLeft transparent dark>
										<Icon name='person' active />
										<Text>400</Text>
									</Button>
								</View>

							</Col>
							<Col style={{ flex: 1, alignItems: 'center', }}>
								<View>
									<Button  iconLeft transparent dark>
										<Icon name='heart' active style={{color:'red'}} />
										<Text>218</Text>
									</Button>
								</View>
							</Col>
						</Grid>
					</CardItem>
					<CardItem>
						<Button style={{ flex: 1 }} block bordered dark >
							<Text>FOLLOW</Text>
						</Button>
					</CardItem>
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


/*


							<Grid>
								<Row>
									<Text>NativeBase</Text>
								</Row>
								<Row>
									<Text note>GeekyAnts</Text>
								</Row>
							</Grid>

*/