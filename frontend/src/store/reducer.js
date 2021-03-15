import {
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  POST_MESSAGE_FAILURE,
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
} from "./actions";

const initialState = {
  error: false,
  loading: false,
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case POST_MESSAGE_SUCCESS:
      return { ...state, loading: false };
    case POST_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case FETCH_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case FETCH_MESSAGE_SUCCESS:
      return { ...state, loading: false, messages: action.messages };
    case FETCH_MESSAGE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
