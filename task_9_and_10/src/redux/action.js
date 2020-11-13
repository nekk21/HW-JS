export function uploadUsers(users) {
  return {
    type: 'RECIVED',
    payload: users,
  }
}

export function fetchUsers() {
  return {
    type: 'REQUEST_POSTS',
  }
}
