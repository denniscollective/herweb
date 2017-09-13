import { ACTION_TYPES } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_YEAR:
      return { ...state, year: state.year + 1 }
    default:
      return state
  }
}

export default reducer
