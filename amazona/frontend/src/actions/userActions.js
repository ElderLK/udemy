import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, 
        USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/userConstans";
import Cookie from 'js-cookie';
import axios from "axios";

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/user/signin', { email, password });

        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) { 
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    }
}

export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/user/register', { name, email, password });

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) { 
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}


