import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import IsPreloadReducer from './isPreload/reducer';
import talkDetailReducer from './talkDetail/reducer';
import talksReducer from './talks/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: IsPreloadReducer,
    talkDetail: talkDetailReducer,
    talks: talksReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
