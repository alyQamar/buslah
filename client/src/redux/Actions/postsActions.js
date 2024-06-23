import { useInsertData } from "../../hooks/api/useInsertData";
import { CREATE_NEW_POST } from "../type";

export const createPost = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/posts`, data);
    dispatch({
      type: CREATE_NEW_POST,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_POST,
      payload: e.response,
    });
  }
};
