import { useInsertData } from "../../hooks/api/useInsertData";
import { CREATE_NEW_QUESTION } from "../type";

export const createQuestion = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/asks`, data);
    dispatch({
      type: CREATE_NEW_QUESTION,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_QUESTION,
      payload: e.response,
    });
  }
};
