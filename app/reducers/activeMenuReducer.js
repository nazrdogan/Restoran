let menu = [];
const breakFast = [
	{
		id: 1,
		title: "Breakfast",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 2,
		title: "Soups",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 3,
		title: "Bakery",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 4,
		title: "Dinner",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	}
];

const soups = [
	{
		id: 1,
		title: "Breakfast",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 2,
		title: "Soups",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 3,
		title: "Bakery",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 4,
		title: "Dinner",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	}
];
const dinner = [
	{
		id: 1,
		title: "Breakfast",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 2,
		title: "Soups",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 3,
		title: "Bakery",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	},
	{
		id: 4,
		title: "Dinner",
		subTitle: "Lorem ipsum",
		image: "https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg"
	}
];
menu.push(breakFast);
menu.push(soups);
menu.push(dinner);
var initalState = {
	title: "",
	list: [],
	activeItem: null,
};

export default function (state = initalState, action) {
	switch (action.type) {
		case "GET_ACTIVE_MENU":
			return { ...state, list: menu[action.payload - 1] };
			break;
		case "GET_ACTIVE_ITEM":
			return { ...state, activeItem: state.list[action.payload - 1] };
			break;
		default:
			break;
	}
	return state;
}