import { getAllCatalogs, getAllStamps, getAllTypes } from '../apis/apiClient'

export const SET_STAMPS = 'SET_STAMPS'
export const ADD_STAMPS = 'ADD_STAMPS'
export const SET_CATS = 'SET_CATS'
export const SET_SType = 'SET_SType'

export function setStamps(stamps) {
  return {
    type: SET_STAMPS,
    payload: stamps,
  }
}
export function setCatalog(cats) {
  //console.log('cats', cats)
  return { type: SET_CATS, payload: cats }
}
export function setSType(t) {
  return { type: SET_SType, payload: t }
}
export function postStamp(stamp) {
  // console.log('post:', col)
  return {
    type: ADD_STAMPS,
    payload: [
      {
        name: stamp.name,
        Number: stamp.Number,
        Type: stamp.Type,
        Catalog: stamp.Catalog,
        retired: stamp.retired,
        bundle: stamp.bundle,
        price: stamp.price,
      },
    ],
  }
}

export function fetchStamps() {
  return (dispatch) => {
    return getAllStamps().then((stamp) => {
      dispatch(setStamps(stamp))
      return null
    })
  }
}
export function fetchCatalogs() {
  return (dispatch) => {
    return getAllCatalogs().then((cat) => {
      // console.log('fetch', cat)
      dispatch(setCatalog(cat))
      return null
    })
  }
}
export function fetchSTypes() {
  return (dispatch) => {
    return getAllTypes().then((cat) => {
      //  console.log('fetch', cat)
      dispatch(setSType(cat))
      return null
    })
  }
}
