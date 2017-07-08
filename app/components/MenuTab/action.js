import { find } from "lodash";

export const goDetail = (id) => {
	return function (dispacth) {
		dispacth({ type: 'GO_DETAIL_MENU', payload: id });
		dispacth({ type: 'GET_ACTIVE_MENU', payload: id });
	}
}

export const goItemDetail = (id) => {
	return function (dispacth) {
		dispacth({ type: 'GO_DETAIL_ITEM', payload: id });
		dispacth({ type: 'GET_ACTIVE_ITEM', payload: id });
	}
}

export const addItemToCart = (item) => {
	return function (dispacth, getState) {

		const { shoppingCart } = getState();
		console.log(shoppingCart);
		console.log(item);
		var addItem = _.find(shoppingCart.list, { 'id': item.id });
		if (addItem === undefined) {
			dispacth({ type: 'ADD_ITEM_TO_SHOPPING_CART', payload: item });
		}
	};
};

export const removeItemToCart = (item) => {
	return function (dispacth) {
		dispacth({ type: 'REMOVE_ITEM_FROM_SHOPPING_CART', payload: item });
	};
};