import { FETCH_CONTENT } from './appactions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CONTENT:
			return { ...state, movies: action.payload };
		default:
			return state;
	}
}
