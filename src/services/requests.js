import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseUrl).then((res) => res.data)

export const createAnecdote = (newAnecdote) =>
  axios.post(baseUrl, newAnecdote).then((res) => res.data)

export const updateAnecdote = (anecdote) => {
  //   const objToVote = axios
  //     .get(`${baseUrl}/${anecdote.id}`)
  //     .then((res) => res.data)
  //   objToVote.votes += 1
  axios.put(`${baseUrl}/${anecdote.id}`, anecdote).then((res) => res.data)
}
