export const FETCH_CONTENT = 'FETCTH_CONTENT';

export function fetchContent(mainData = null) {
	//const api_url = `${ROOT_URL}${KEY}`;
	// const request = axios.get(api_url)
	return {
		type: FETCH_CONTENT,
		payload: 'mainData'
	};
}
