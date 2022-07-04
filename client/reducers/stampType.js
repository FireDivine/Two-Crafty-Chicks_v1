import { SET_CATS } from '../actions/stamps'

const initialState = []

const CatalogReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CATS:
      console.log('State: ', payload)
      return payload
    default:
      return state
  }
}

export default CatalogReducer
