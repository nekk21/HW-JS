import React from 'react'
import { Table, Container } from 'react-bootstrap'

export default ({ users }) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {users.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.login}</td>
              <td>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.html_url}
                >
                  {item.html_url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
