import { showLoading, hideLoading } from 'react-redux-loading-bar';
import Api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveTalksActionCreator } from '../talks/action';

function asyncPopulateUserAndTalks() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await Api.getAllUsers();
      const talks = await Api.getAllTalks();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveTalksActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export default asyncPopulateUserAndTalks;
