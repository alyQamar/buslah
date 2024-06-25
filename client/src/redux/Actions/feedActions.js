import axios from 'axios';
import { GET_FEED } from '../type';
import { useGetRes } from '@hooks/api/useGetData';

export const getFeed = (page, limit, sort, filterBy) => async (dispatch) => {
  try {
    const response =await useGetRes(`/feed?page=${page}&limit=${limit}&sort=${sort}&filterBy=${filterBy}`);
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
