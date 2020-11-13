import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import getUsers from '../request'
import Tab from './Tab'

export const Main = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
    })
  }, [users])

  return (
    <Container>
      <Tab users={users} />
    </Container>
  )
}
