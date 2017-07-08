import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const LoginScreen = ({ navigation }) => (
	<Container style={styles.container}>
		<Content>
			{/*
			<Card>
				<CardItem cardBody>
        <Image  source={{ uri: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg' }} style={styles.paragraph}>
           <View style={styles.backdropView}>
          </View>
					<View style={styles.overlay} ></View>
           <View style={styles.backdropText}>
            <Text style={styles.headLine}>Breakfast</Text>
          </View>
         </Image>
				</CardItem>
			</Card>
				<Card>
				<CardItem cardBody>
        <Image  source={{ uri: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg' }} style={styles.paragraph}>
           <View style={styles.backdropView}>
          </View>
					<View style={styles.overlay} ></View>
           <View style={styles.backdropText}>
            <Text style={styles.headLine}>Breakfast</Text>
          </View>
         </Image>
				</CardItem>
			</Card>
				<Card>
				<CardItem cardBody>
        <Image  source={{ uri: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg' }} style={styles.paragraph}>
           <View style={styles.backdropView}>
          </View>
					<View style={styles.overlay} ></View>
           <View style={styles.backdropText}>
            <Text style={styles.headLine}>Breakfast</Text>
						<Text style={styles.subLine}>Breakfast</Text>
          </View>
         </Image>
				</CardItem>
			</Card>
			 */}
			<Text style={styles.welcome}>
				Screen A
    </Text>
			<Text style={styles.instructions}>
				This is great
    </Text>
			<Button
				onPress={() => navigation.dispatch({ type: 'Profile' })}
				title="Log in"
			/>
		</Content>
	</Container>
);

const styles = ({
  container: {
    flex: 1,   
  },
  paragraph: {
    flex:1,
    height:200,
    justifyContent:'center',
  },
   backdropView: {
    flex:1,
    opacity:0.2,
    backgroundColor:'black',
    alignItems:'center',
  },
   backdropText: {
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent',
  
  },
	overlay: {
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
		opacity:0.4,
  
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