import { ActionType } from './action';

function talksReducer(talks = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TALKS:
      return action.payload.talks;
    case ActionType.ADD_TALK:
      return [action.payload.talk, ...talks];
    case ActionType.TOGGLE__LIKE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            // eslint-disable-next-line max-len
            likes: talk.likes.includes(action.payload.userId) ? talk.likes.filter((id) => id !== action.payload.userId) : talk.likes.concat([action.payload.userId]),
          };
        }

        return talk;
      });
    default:
      return talks;
  }
}

export default talksReducer;
