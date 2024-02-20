import { CREATE_NEW_USER, FOREGT_PASSWORD, LOGIN_USER, RESET_PASSWORD, VERIFY_PASSWORD } from '../type';
import { useInsertData } from '../../hooks/api/useInsertData';
import { useInsUpdateData } from '../../hooks/api/useUpdateData';

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/sign-up`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response
    });
  }
};

//login  user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/log-in`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response
    });
  }
};

//1-foregt  passwrod
export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/forgot-password`, data);
    dispatch({
      type: FOREGT_PASSWORD,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: FOREGT_PASSWORD,
      payload: e.response
    });
  }
};

//2-verify  passwrod
export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/check-code`, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response
    });
  }
};

//2-reset  passwrod
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/reset-password`, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response
    });
  }
};

// //login  user
// export const getLoggedUser = () => async (dispatch) => {
//     try {
//         const response = await useGetDataToken(`/api/v1/users/getMe`);
//         dispatch({
//             type: GET_CURERNT_USER,
//             payload: response,
//             loading: true
//         })

//     } catch (e) {
//         dispatch({
//             type: GET_CURERNT_USER,
//             payload: e.response,
//         })
//     }
// }

// //update  user data
// export const updateUserProfileData = (body) => async (dispatch) => {
//     try {
//         const response = await useInsUpdateData(`/api/v1/users/updateMe`, body);
//         console.log(response)
//         dispatch({
//             type: UPDATE_USER_PROFILE,
//             payload: response,
//             loading: true
//         })

//     } catch (e) {
//         dispatch({
//             type: UPDATE_USER_PROFILE,
//             payload: e.response,
//         })
//     }
// }

// //update  user password
// export const updateUserPassword = (body) => async (dispatch) => {
//     try {
//         const response = await useInsUpdateData(`/api/v1/users/changeMyPassword`, body);
//         console.log(response)
//         dispatch({
//             type: UPDATE_USER_PASSWORD,
//             payload: response,
//             loading: true
//         })

//     } catch (e) {
//         dispatch({
//             type: UPDATE_USER_PASSWORD,
//             payload: e.response,
//         })
//     }
// }
