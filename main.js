

const container = document.querySelector('.display-info');

const display = (item) => {
	container.innerHTML = `
	<img src="${item.data.avatar}">
	<h1>${item.data.first_name} ${item.data.last_name}</h1>
	<h2>${item.data.email}</h2>
	<b>ID: ${item.data.id}</b>
	`
}

fetch('https://reqres.in/api/users/2')
	.then(res => res.json())
	.then(res => display(res))