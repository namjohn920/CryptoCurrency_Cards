import * as actionTypes from "./coinActionConstants";
import { asyncStart, asyncFinish, asyncError } from './asyncActions'
import { keys } from '../config/keys'

//Keys.js file is hidden from GitHub. Insert your own apiURL
const baseUrl = keys.apiURL;

export const getCoinData = () =>
  async (dispatch) => {
    dispatch(asyncStart())
    const response = await fetch(baseUrl);
    const data = await response.json();

    try {
      await console.log(data)

      await dispatch({ type: actionTypes.FETCH_COINDATA, payload: { data } })
      return dispatch(asyncFinish());
    } catch (err) {
      console.log(err)
      return dispatch(asyncError());
    }
  }