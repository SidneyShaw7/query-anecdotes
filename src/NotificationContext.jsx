import { useContext } from 'react'
import { createContext, useReducer } from 'react'

const notifictionReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return { message: action.payload, timeout: action.timeout || 5000 }
    case 'HIDE':
      return { message: null, timeout: null }
    default:
      return state
  }
}

const NotificationContext = createContext()

export const useNotification = () => {
  return useContext(NotificationContext)
}

export const NotificationContextProvider = ({ children }) => {
  const [notification, notificationDispatch] = useReducer(
    notifictionReducer,
    null
  )

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
