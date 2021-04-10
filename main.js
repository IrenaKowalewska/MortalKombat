// const player1 = {
//     nameHero: 'Scorpion',
//     hp: 100,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//     weapon: ['knife', 'gun'],
//     attack() {
//         console.log(`${this.nameHero} Fight...`)
//     }
// }

// const player2 = {
//     nameHero: 'Kitana',
//     hp: 90,
//     img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
//     weapon: ['knife', 'gun'],
//     attack() {
//         console.log(`${this.nameHero} Fight...`)
//     }
// }

class Player {
    constructor(name, hp, img, weapon) {
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
    }
    attack () {
        console.log(`${this.name} Fight...`)
    }
}

const player1 = new Player('Scorpion', 
                            100, 
                            'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 
                            ['knife', 'gun']);
const player2 = new Player('Kitana', 
                            90, 
                            'http://reactmarathon-api.herokuapp.com/assets/kitana.gif', 
                            ['knife', 'gun']);

function createPlayer(selector, player) {
    const arenas = document.querySelector('.arenas');
    const player1 = document.createElement('div');
    const progressbar = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const character = document.createElement('div');
    const playerImg = document.createElement('img');
    
    player1.classList.add(selector);
    progressbar.classList.add('progressbar');
    life.classList.add('life');
    name.classList.add('name');
    character.classList.add('character');
    life.style.width = "100%";
    name.innerHTML = player.name;
    life.innerHTML = player.hp;
    playerImg.src = `${player.img}`;
    
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(playerImg);
    player1.appendChild(progressbar);
    player1.appendChild(character);
    arenas.appendChild(player1);
}

createPlayer('player1',  player1);
createPlayer('player2',  player2 );
