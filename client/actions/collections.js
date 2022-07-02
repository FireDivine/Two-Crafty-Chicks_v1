import { getAllCollections } from '../apis/apiClient'

export const SET_COLLECTIONS = 'SET_COLLECTIONS'
export const ADD_COLLECTION = 'ADD_COLLECTION'

export function setCol(col) {
  return {
    type: SET_COLLECTIONS,
    payload: col,
  }
}
export function postCol(col) {
  // console.log('post:', col)
  return {
    type: ADD_COLLECTION,
    payload: [{ name: col }],
  }
}

export function fetchCollections() {
  return (dispatch) => {
    return getAllCollections().then((col) => {
      console.log('col: ', col)
      dispatch(setCol(col))
      return null
    })
  }
}
