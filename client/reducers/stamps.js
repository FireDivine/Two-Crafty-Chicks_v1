import { SET_STAMPS, ADD_STAMPS } from '../actions/stamps'

const initialState = []

const stampsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STAMPS:
      return payload
    case ADD_STAMPS:
      return [
        {
          name: action.payload.name,
          Number: action.payload.Number,
          Type: action.payload.Type,
          Catalog: action.payload.Catalog,
          retired: action.payload.retired,
          bundle: action.payload.bundle,
          price: action.payload.price,
        },
      ]

    default:
      return state
  }
}

export default stampsReducer
