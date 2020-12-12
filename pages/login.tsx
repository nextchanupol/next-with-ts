import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';

interface Props {}

export default function login({}: Props): ReactElement {
  const dispatch = useDispatch();
  const authenReducer = useSelector(({ authenReducer }) => authenReducer);
  return (
    <div>
      <Layout>
        <h1>Login</h1>
        <button
          onClick={() => {
            dispatch(actions.login({ username: 'admin', password: '1345' }));
          }}
        >
          Login
        </button>
        <span>{authenReducer.token ? authenReducer.token : ''}</span>
      </Layout>
    </div>
  );
}
