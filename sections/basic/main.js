const listRepos = async username => {
	const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
		.then(res => res.json())
		.then(res => {
			console.log(res);
			return res
		})
		.catch(err => console.error(err));

	const markup = repos.map((repo, i) => {
			if (i < 6) {
				return `
			<li>
				<a href="${repo.html_url}">${repo.name}</a>
				(⭐ ${repo.stargazers_count})
			</li>`
			}
		}).join('');

	const content = document.getElementById('content');
	if (content.children.length === 0) content.innerHTML = '';

	const card = document.createElement('div');
	card.innerHTML = `<h3>${username}</h3><ul>${markup}</ul>`;
	content.appendChild(card);
}

listRepos('jlengstorf');
listRepos('digitalvilla');