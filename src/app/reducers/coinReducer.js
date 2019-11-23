import * as actionTypes from '../actions/coinActionConstants';

const initialChannelState = {
    coinData: [],
}

const coinReducer = (state = initialChannelState, action) => {
    switch(action.type) {
      case actionTypes.FETCH_COINDATA:
        return {
          ...state,
          coinData:action.payload.data.rates,
        }
      default:
        return state;
    }
  }

  export default coinReducer