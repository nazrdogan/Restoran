const initalState = {
	list: [],
};
export default function (state = initalState, action) {
	switch (action.type) {
		case "ADD_ITEM_TO_SHOPPING_CART":
			return { ...state, list: [...state.list, action.payload] };
			break;
		case "REMOVE_ITEM_FROM_SHOPPING_CART":
			return { ...state, list: state.list.filter(item => action.payload !== item) };
			break;
		case "UPDATE_ITEM_COUNT":
			var copy = Object.assign({}, state);
			copy.list[action.payload.index].quantity = action.payload.count;
			return { ...state, list: copy.list };
			break;
		default:
			break;
	}
	return state;
}