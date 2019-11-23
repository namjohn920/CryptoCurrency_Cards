import * as actionTypes from '../actions/asyncActionConstants';

const initialChannelState = {
    loading: true,
    error: ''
}

const asyncReducer = (state = initialChannelState, action) => {
    switch(action.type) {
      case actionTypes.ASYNC_ACTION_STARTED:
        return {
          ...state,
          loading: action.payload.loading
        }
      case actionTypes.ASYNC_ACTION_FINISHED:
        return {
          ...state,
          loading: action.payload.loading
        }
      case actionTypes.ASYNC_ACTION_ERROR:
        return {
          ...state,
          loading: action.payload.loading,
          error: action.payload.error
        }
      default:
        return state;
    }
  }

  export default asyncReducer