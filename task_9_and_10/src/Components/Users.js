import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/action'
import Tab from './Tab'

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.items.users)

  dispatch(fetchUsers())

  return (
    <Container>
      <Tab users={users} />
    </Container>
  )
}
