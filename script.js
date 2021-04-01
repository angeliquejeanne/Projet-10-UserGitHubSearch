const APICALL = "https://api.github.com/users/";
const display = document.querySelector('.display');
const form = document.querySelector('.formSearch');
const inputSearch = document.querySelector('.inputSearch');

async function dataGithub(user){

    const response = await fetch(`${APICALL}${user}`);
    const data = await response.json();
    // console.log(data);
    creationcard(data);
}

dataGithub("anggiie")

function creationcard(user){

    const cardHTML = `
    <div class="card">
        <img src="${user.avatar_url}" alt="icone avatar" class="avatar">
        <h2>${user.name}</h2>
        <ul class="contenaireInfo">
            <li class="followers">Followers : ${user.followers}</li>
            <li class="etoiles">Repos : ${user.public_repos}</li>
            <li class="bio">Followers : ${user.bio}</li>
        </ul>
    </div>
    `;
    display.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputSearch.value.length > 0){

        dataGithub(inputSearch.value);
        inputSearch.value = "";
    }
})