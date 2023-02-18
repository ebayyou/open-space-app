import { ActionType } from './action';

function IsPreloadReducer(isPreLoad = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreLoad;
    default:
      return isPreLoad;
  }
}

export default IsPreloadReducer;
