import axios from 'axios';

export const apiGetCard = (urlBase, slug) => axios.get(urlBase + '/' + slug)