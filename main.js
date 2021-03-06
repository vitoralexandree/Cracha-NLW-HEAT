const LinksSocialMedia = {
    github: 'vitoralexandree',
    youtube: 'vitoralexandrecirino',
    facebook: 'maykbrito',
    instagram: 'vitoralexandree',
    twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute ('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/vitoralexandree`

fetch(url)
.then(response =>  response.json())
.then(data => {
userName.textContent = data.name
userBio.textContent = data.bio

})

}

getGitHubProfileInfos()