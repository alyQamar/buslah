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
