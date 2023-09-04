const user = {
    avatarUrl:'',
    name:'',
    bio:'',
    userName:'',
    repositories:[],
    followersUrl:'',
    followingUrl:'',
    events: [],

    setInfo(gitHubUser){
        this.avatarUrl=gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followersUrl = gitHubUser.followers
        this.followingUrl = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories=repositories
    },
    setEvents(events){
        this.events = events
    }

}

export{user}