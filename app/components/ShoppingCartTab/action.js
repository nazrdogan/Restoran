export const updateCount = (index, count) => {
	return function (dispacth) {

		dispacth({ type: 'UPDATE_ITEM_COUNT', payload: { index, count } });
	}
}