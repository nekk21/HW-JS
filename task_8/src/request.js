const url = 'https://api.github.com/users'

async function getUsers() {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default getUsers
