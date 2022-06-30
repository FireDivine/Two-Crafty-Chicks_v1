import { SET_STAMPS } from '../actions'

const initialState = []

const stampsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STAMPS:
      return payload
    default:
      return state
  }
}

export default stampsReducer
