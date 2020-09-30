import React from 'react'
import { Table, Container } from 'react-bootstrap'

export const Users = () => (
  <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody></tbody>
    </Table>
  </Container>
)
