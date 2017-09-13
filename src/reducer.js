import { ACTION_TYPES } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_YEAR:
      return { ...state, year: state.year + 1 }
    case ACTION_TYPES.SET_TITLE:
      return { ...state, title: action.title }
    default:
      return state
  }
}

export default reducer
