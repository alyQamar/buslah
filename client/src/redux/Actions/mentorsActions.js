import { useGetData } from "../../hooks/api/useGetData";
import { GET_ALL_MENTORS, GET_ERROR } from "../type";


export const getAllMentors = (page = 1, limit = 10) => async (dispatch) => {
  try {
      const response = await useGetData(`/users/mentors?page=${page}&limit=${limit}`);
      dispatch({
          type: GET_ALL_MENTORS,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}

//get all mentors with query string
export const getAllMentorsSearch = (queryString, page = 1, limit = 10, selectedCountry, selectedLanguage) => async (dispatch) => {
  try {
    let url = `/users/mentors?page=${page}&limit=${limit}`;
    if (queryString) url += `&keyword=${queryString}`;
    if (selectedCountry) url += `&country=${selectedCountry}`;
    if (selectedLanguage) url += `&language=${selectedLanguage}`;

    const response = await useGetData(url);
    dispatch({
      type: GET_ALL_MENTORS,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

