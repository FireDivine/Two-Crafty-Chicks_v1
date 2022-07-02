import { getAllStamps } from '../apis/apiClient'

export const SET_STAMPS = 'SET_STAMPS'

export function setStamp(stamp) {
  return {
    type: SET_STAMPS,
    payload: stamp,
  }
}

export function fetchStamps() {
  return (dispatch) => {
    return getAllStamps().then((stamp) => {
      dispatch(setStamp(stamp))
      return null
    })
  }
}
