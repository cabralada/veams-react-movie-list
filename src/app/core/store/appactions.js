// https://api.themoviedb.org/3/movie/76341?api_key=396c6582c8887a8bc760a57e305681d9
import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3';
const KEYAPI = '?api_key=396c6582c8887a8bc760a57e305681d9';

export const FETCH_CONTENT = 'FETCTH_CONTENT';
export const SEARCH_CONTENT = 'SEARCH_CONTENT';

export function fetchContent(page) {
	const EXTRA = `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
	const api_url = `${ROOT_URL}/discover/movie${KEYAPI}${EXTRA}`;
	const request = axios.get(api_url);

	return dispatch => {
		request.then(({ data }) =>
			dispatch({
				type: FETCH_CONTENT,
				payload: data
			})
		);
	};
}

export function searchContent(searching) {
	const EXTRA = `&query=${pasearchingge}`;
	const api_url = `${ROOT_URL}/search/movie${KEYAPI}${EXTRA}`;
	const request = axios.get(api_url);

	return dispatch => {
		request.then(({ data }) =>
			dispatch({
				type: SEARCH_CONTENT,
				payload: data
			})
		);
	};
}
