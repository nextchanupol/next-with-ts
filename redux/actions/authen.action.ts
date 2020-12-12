import { LOGIN } from '../types';
import { Account } from '../../types/Account';

const setLoginReducer = (payload) => ({
  type: LOGIN,
  payload,
});

const login = ({ username, password }: Account) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setLoginReducer({ token: '1234', user: { username } }), 3000);
    });
  };
};

export default {
  login,
};
