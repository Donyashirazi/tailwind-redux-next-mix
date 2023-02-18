import React from 'react';
const initialState = { list: [] };

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case Add_Todo:
			const { data, id } = action.payload;

			return {
				...state,
				list: [...state.list, { data, id }],
			};
			break;
		case Delete_Todo:
			const newList = state.list.filter(
				(newitem) => newitem.id !== action.id
			);
			return {
				...state,
				list: newList,
			};
			break;

		default:
			return state;
	}
};
