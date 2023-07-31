const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = 
            `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perifl do usuário"/>
            <div class="data">
            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
            </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href ="${repo.html_url}">${repo.name}</a></li>`)

        if(user.repositories.lenght > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositories</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>usuario nao encontrado</h3>"
    }
}

export {screen}