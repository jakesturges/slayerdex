const slayerdex = document.querySelector("#slayerdex");

const fetchCharacters = () => {
    const apiURl = "https://demon-slayer-api-9c6c.onrender.com/api/";
    fetch(apiURl)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            const characters = data.map(characterData => {
                return {
                    name: characterData.name,
                    id: characterData.id,
                    race: characterData.race,
                    affiliation: characterData.affiliation,
                    skill: characterData.skill,
                    image: `images/${characterData.name.toLowerCase().replace(/\s/g, '-')}.webp`
                };
            });
            displayCharacters(characters);
            
        });

};

function displayCharacters(characters) {
    console.log(characters);
    const demonSlayerHTMLString = characters.map(character => `
    <li class="card" onclick="toggleFlip(this)">
    <div class="card-inner">
        <div class="card-front">
            <img class="card-image" src="${character.image}" alt="${character.name}">
            <h2 class="card-title">${character.name}. ${character.id}</h2>
        </div>
        <div class="card-back">
            <p class="card-text">Race: ${character.race}</p>
            <p class="card-text">Affiliation: ${character.affiliation}</p>
            <p class="card-text">Skill: ${character.skill}</p>
        </div>
    </div>
</li>
    `).join("");
    slayerdex.innerHTML = demonSlayerHTMLString;
}

function toggleFlip(card) {
    card.classList.toggle("flipped");
}

fetchCharacters();