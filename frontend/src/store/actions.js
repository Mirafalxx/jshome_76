import axiosMessages from "../axiosMessages";

export const POST_MESSAGE_REQUEST = "POST_MESSAGE_REQUEST";
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS";
export const POST_MESSAGE_FAILURE = "POST_MESSAGE_FAILURE";

export const FETCH_MESSAGE_REQUEST = "FETCH_MESSAGE_REQUEST";
export const FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS";
export const FETCH_MESSAGE_FAILURE = "FETCH_MESSAGE_FAILURE";

export const postMessageRequest = () => ({ type: POST_MESSAGE_REQUEST });
export const postMessageSuccess = () => ({ type: POST_MESSAGE_SUCCESS });
export const postMessageFailure = (error) => ({ type: POST_MESSAGE_FAILURE, error });

export const fetchMessageRequest = () => ({ type: FETCH_MESSAGE_REQUEST });
export const fetchMessageSuccess = (messages) => ({ type: FETCH_MESSAGE_SUCCESS, messages });
export const fetchMessageFailure = (error) => ({ type: FETCH_MESSAGE_FAILURE, error });

export const postMessage = (message) => {
  return async (dispatch) => {
    try {
      dispatch(postMessageRequest());
      await axiosMessages.post("/messages", message);
      dispatch(postMessageSuccess());
    } catch (e) {
      dispatch(postMessageFailure(e));
    }
  };
};

export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMessageRequest());
      const response = await axiosMessages.get("/messages");
      console.log(response.data);
      dispatch(fetchMessageSuccess(response.data));
    } catch (e) {
      dispatch(fetchMessageFailure(e));
    }
  };
};
