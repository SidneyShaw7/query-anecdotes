import { createAnecdote } from '../services/requests'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNotification } from '../NotificationContext'

const AnecdoteForm = () => {
  const [notification, dispatch] = useNotification()
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: (error) => {
      dispatch({ type: 'SHOW', payload: error.response.data.error })
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    dispatch({ type: 'SHOW', payload: `Anecdote '${content}' was added!` })
    console.log(notification)
    console.log(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
