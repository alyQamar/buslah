import {
  CREATE_NEW_USER,
  FOREGT_PASSWORD,
  GET_CURERNT_USER,
  LOGIN_USER,
  RESET_PASSWORD,
  VERIFY_PASSWORD,
  UPDATE_USER_PROFILE
} from '../type';
import { useInsertData } from '@hooks/api/useInsertData';
import { useInsUpdateData } from '@hooks/api/useUpdateData';
import { useGetDataUser } from '@hooks/api/useGetData';
import useDeleteData from '@hooks/api/useDeleteData';
import baseUrl from '@shared/services/api/baseURL';


// Update user profile

export const updateUserProfile = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData('/users/me', data);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
};

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/auth/signUp`, data);
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
    const response = await useInsertData(`/auth/login`, data);
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

//login  user
export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetDataUser(`/users/me`);
    dispatch({
      type: GET_CURERNT_USER,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_CURERNT_USER,
      payload: e.response
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/users/logout`);

    dispatch({
      type: LOGOUT,
      payload: null,
    });
  } catch (e) {
    dispatch({
      type: GET_CURERNT_USER,
      payload: e.response
    });
  }
};

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
