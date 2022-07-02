import { SET_COLLECTIONS } from '../actions/collections'

const initialState = []

const CollectionReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_COLLECTIONS:
      return payload
    // case ADD_COLLECTION:
    //   return[... state,[{name:action.payload.name}]]
    default:
      return state
  }
}

export default CollectionReducer
