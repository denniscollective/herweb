export const INCREMENT_YEAR = 'INCREMENT_YEAR'

export function incrementYear () {
  return { type: INCREMENT_YEAR }
}

export const SET_TITLE = 'SET_TITLE'
export function setTitle (title) {
  return {type: SET_TITLE, title}
}

export const ACTION_TYPES = { INCREMENT_YEAR, SET_TITLE }
