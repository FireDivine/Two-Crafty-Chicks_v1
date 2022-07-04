import { SET_SType } from '../actions/stamps'

const initialState = []

const stampTypesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SType:
      //   console.log('State: ', payload)
      return payload
    default:
      return state
  }
}

export default stampTypesReducer
