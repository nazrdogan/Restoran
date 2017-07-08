import { combineReducers } from 'redux';
import { nav } from './routeReducer';
import mainMenu from './mainMenuReducer';
import activeMenu from './activeMenuReducer';
import shoppingCart from './shoppingCartReducer';


const AppReducer = combineReducers({ nav, mainMenu, activeMenu,shoppingCart});
export default AppReducer;

