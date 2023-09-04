const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = 
            `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perifl do usuário"/>
            <div class="data">
            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
            <br>
            <p>👥 Seguidores: ${user.followersUrl ?? 'Não possui seguidores 😥'}</p>
            <p>👥 Seguindo: ${user.followingUrl ?? 'Não segue ninguém ainda 😥 '}</p>
            </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href ="${repo.html_url} target="_black"">${repo.name}<br><br><p class:"propriedades"><span>🍴${repo.forks}</span> <span>⭐${repo.stargazers_count}</span><span>👀${repo.watchers}</span><span>👩‍💻${repo.language ?? 'sem linguagem'}</span></p></a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositories</h2>
            <ul>${repositoriesItens ?? 'Não possui repositórios ainda 😥'}</ul>
            </div>`
          
        }

        let eventsItens = ''
        user.events.forEach(event=> eventsItens += 
            `<li>
                <p class="titleEvent">${event.repo.name}
                <p class="typeEvent"> <span> - ${event.type === 'PushEvent' ? event.payload.commits[0].message : event.payload.ref_type }</span></p>
                </p>
             </li>`)

             if(user.events.length>0){
                this.userProfile.innerHTML+=`<div class="events section">
                <h2>Events</h2>
                <ul>${eventsItens ?? 'Não possui eventos ainda 😥'}</ul>
                </div>`
                
             }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>usuario nao encontrado</h3>"
    }
}

export {screen}