import axios from 'axios';

const ep = ''
const ep_card = process.env.REACT_APP_API_URL_CARD

export const apiGetCard = (loc) => axios.get(ep_card + '/' + loc)

export const apiPost = (loc, obj) => axios.post(ep + '/' + loc, obj)