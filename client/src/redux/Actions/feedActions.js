import axios from 'axios';
import { GET_FEED } from '../type';

export const getFeed = (page, limit, sort, filterBy) => async (dispatch) => {
  try {
    const response = await axios.get(`/feed`, {
      params: { page, limit, sort, filterBy },
    });
    dispatch({
      type: GET_FEED,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_FEED,
      payload: e.response ? e.response.data : { error: 'Network error' },
    });
  }
};
