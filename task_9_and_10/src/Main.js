import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import getUsers from './request'
import Tab from './Components/Tab'

export const Main = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
    })
  }, [])

  return (
    <Container>
      <Tab users={users} />
    </Container>
  )
}
