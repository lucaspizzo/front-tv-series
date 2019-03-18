import axios from 'axios';

export const fetchShows = () => {
	return axios.get("http://api.tvmaze.com/search/shows?q=robot");
};
