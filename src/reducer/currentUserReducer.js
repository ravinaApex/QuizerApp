const initialState = {};

export default function quiz(state = initialState, action = {}) {
  switch (action.type) {

    case 'currentUser':
      return {
        ...state,
        currentUserError: action.error ? action.error : null,
        currentUserSuccess: action.subtype === 'success',
        currentUserLoading: action.subtype === 'loading',
        currentUserData: action.subtype === "success" ? action.currentUserData : state.currentUserData,
      };

    case 'rankedUser':
      return {
        ...state,
        rankedUserError: action.error ? action.error : null,
        rankedUserSuccess: action.subtype === 'success',
        rankedUserLoading: action.subtype === 'loading',
        rankedUserData: action.subtype === "success" ? action.rankedUserData : state.rankedUserData,
      };

    case 'rankedUserList':
      return {
        ...state,
        rankedUserListError: action.error ? action.error : null,
        rankedUserListSuccess: action.subtype === 'success',
        rankedUserListLoading: action.subtype === 'loading',
        rankedUserDataList: action.subtype === "success" ? action.rankedUserDataList : state.rankedUserDataList,
      };

    case 'quizData':
      return {
        ...state,
        quizDataError: action.error ? action.error : null,
        quizDataSuccess: action.subtype === 'success',
        quizDataLoading: action.subtype === 'loading',
        quizData: action.subtype === "success" ? action.quizData : state.quizData,
      };

    default:
      return state;
  }
}
