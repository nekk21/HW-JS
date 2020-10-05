export default {
	state: {
		users: [],
	},
	mutations: {
		updateUsers(state, users) {
			state.users = users
		},
	},
	actions: {
		async getUsers(ctx) {
			const users = []
			const url = 'https://api.github.com/users'
			const response = await fetch(url)
			const res = await response.json()
			res.map(item => {
				const user = {
					ID: item.id,
					login: item.login,
					URL: item.html_url,
				}

				users.push(user)
			})
			ctx.commit('updateUsers', users)
		},
	},
	getters: {
		allUsers(state) {
			return state.users
		},
	},
}
