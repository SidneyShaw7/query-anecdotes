import { useContext } from 'react'
import NotificationContext from '../NotificationContext'

const Notification = ({ text }) => {
  const [notification, dispatch] = useContext(NotificationContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  }

  // if (true) return null

  return (
    <div style={notification && style}>
      {notification && dispatch({ text })}
    </div>
  )
}

export default Notification
