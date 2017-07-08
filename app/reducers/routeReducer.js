import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
export function nav(state = null, action) {
	let nextState;
	switch (action.type) {
		case 'Login':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
			break;
		case 'Logout':
		  /* 
		  	Key must be  null:  There is no route defined for.
			*/
			nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Login' })] }), state);
			break;
		case 'Profile':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Profile' })] }), state);
			break;
		case 'GO_DETAIL_MENU':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'MenuTabDetailScreen', params: { itemID: action.payload } }), state);
			break;
		case 'GO_DETAIL_ITEM':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ItemDetailScreen', params: { itemID: action.payload } }), state);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}

