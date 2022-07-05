import { combineReducers } from 'redux'

import stamps from './stamps'
import Collections from './collections'
import CatalogReducer from './catalog'
import stampTypesReducer from './stampType'

export default combineReducers({
  stamps,
  Collections,
  CatalogReducer,
  stampTypesReducer,
})
