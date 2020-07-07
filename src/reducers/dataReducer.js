import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "../actions/action-types";

const initialState = {
  loading: false,
  data: null,
  buildingsArray: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_API_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        testWorks: true,
        data: action.payload,
        buildingsArray: action.payload.data.items,
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: null,
      };
    default:
      return state;
  }
}
