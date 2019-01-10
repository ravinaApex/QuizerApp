import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import quiz from "./currentUserReducer";


const appReducer = combineReducers({
  quiz,
});

const initialState = {
  quiz: {
    currentUserData: {},
    rankedUserData: {},
    quizData: {},
    rankedUserDataList: {},
    historyData: []
  }
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "restoreState") {
    if (action.stateToRestore) {
      return {
        ...state,
        quiz: {
          ...state.quiz,
          ...action.stateToRestore.quiz,
        },
      };
    }
    else {
      return state;
    }
  }

  return appReducer(state, action);
};

export default rootReducer;
