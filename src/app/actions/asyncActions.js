import * as actionTypes from "./asyncActionConstants";

export const asyncStart = () =>
  async (dispatch) => {
    try {
      return dispatch({ type: actionTypes.ASYNC_ACTION_STARTED, payload: { loading: true } })
    } catch (err) {
      console.log(err)
    }
  }

export const asyncFinish = () =>
  async (dispatch) => {
    try {
      return dispatch({ type: actionTypes.ASYNC_ACTION_FINISHED, payload: { loading: false } })
    } catch (err) {
      console.log(err)
    }
  }

export const asyncError = () =>
  async (dispatch) => {
    try {
      return dispatch({ type: actionTypes.ASYNC_ACTION_ERROR, payload: { loading: false, error: "Async Action Error" } })
    } catch (err) {
      console.log(err)
    }
  }