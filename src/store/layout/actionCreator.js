import { OPEN_SIDEBAR, TOGGLE_TOAST } from './actionType'

export function openSidebar (vis) {
  return {
    type: OPEN_SIDEBAR,
    payload: {
      vis,
    }
  }
}

export function toggleToast (vis) {
  return {
    type: TOGGLE_TOAST,
    payload: {
      vis,
    }
  }
}
