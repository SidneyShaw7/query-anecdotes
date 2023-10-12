import { createContext } from 'react'

const NotifictionReducer = (state, action) => {
  switch (action.type) {
    case 'ON':
      return (state.message = action.payload)
    case 'OFF':
      return (state.message = null)
    default:
      return state
  }
}

const NotificationContext = createContext()

export default NotificationContext
