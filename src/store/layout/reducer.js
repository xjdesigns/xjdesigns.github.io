import { OPEN_SIDEBAR, TOGGLE_TOAST } from './actionType'

export const initialState = {
  isSidebarOpen: false,
  isToastOpen: false,
}

export default function layoutState (state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR: {
      const newState = {
        ...state,
        isSidebarOpen: action.payload.vis,
      }
      return newState
    }
    case TOGGLE_TOAST: {
      const newState = {
        ...state,
        isToastOpen: action.payload.vis,
      }
      return newState
    }
    default: {
      return state
    }
  }
}
