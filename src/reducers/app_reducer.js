const INITIALIZE = 'INITIALIZE'

const initialState = {
  initialize: false 
}

export default ( state = initialState, action ) {
  switch ( action.type ) {
    case INITIALIZE: 
      return { ...state, initialize: action.payload }
    default: return state  
  }
}

const set_initialize = () => ({ type: INITIALIZE, payload })

export const setInitialize = () => dispatch => {
  dispatch( set_initialize( true ) )
}