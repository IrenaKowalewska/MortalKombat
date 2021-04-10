const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
class Player {
    constructor(playerNumber, name, hp, img, weapon) {
        this.playerNumber = playerNumber;
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
    }
    attack () {
        console.log(`${this.name} Fight...`)
    }
}

const player1 = new Player( 1,
                            'Scorpion', 
                            100, 
                            'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 
                            ['knife', 'gun']);
const player2 = new Player( 2,
                            'Kitana', 
                            100, 
                            'http://reactmarathon-api.herokuapp.com/assets/kitana.gif', 
                            ['knife', 'gun']);

function createElem(tag, className) {
    const tagElement = document.createElement(tag);
        if (className) {
            tagElement.classList.add(className);
        }
    
    return tagElement;
}

function createPlayer(player) {
    const gamePlayer = createElem('div', `player${player.playerNumber}`);
    const progressbar = createElem('div', 'progressbar');
    const life = createElem('div', 'life');
    const name = createElem('div', 'name');
    const character = createElem('div', 'character');
    const playerImg = createElem('img');
    
    life.style.width = `${player.hp}%`;
    name.innerHTML = player.name;
    playerImg.src = `${player.img}`;
    
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(playerImg);
    gamePlayer.appendChild(progressbar);
    gamePlayer.appendChild(character);

    return gamePlayer;
}

function playerWin(name) {
    const winTitle = createElem('div', 'loseTitle');
    winTitle.innerHTML = `${name} win!`;
    return winTitle;
} 

function gameOver() {
    if (player1.hp < 0 && player2.hp > 0) {
        player1.hp = 0; 
        randomButton.disabled = true;
        arenas.appendChild(playerWin(player2.name));
    }
    if (player1.hp > 0 && player2.hp < 0) {
        player2.hp = 0; 
        randomButton.disabled = true;
        arenas.appendChild(playerWin(player1.name));
    } 
    if (player1.hp < 0 && player2.hp < 0) {
        let nobody = 'Nobody wins!';
        player1.hp = 0; 
        player2.hp = 0; 
        randomButton.disabled = true;
        arenas.appendChild(playerWin(nobody));
    } 
}

function changePlayer(player) {
    const playerLife = document.querySelector(`.player${player.playerNumber} .life`);
    player.hp -= Math.ceil(Math.random() * 20);
    playerLife.style.width = player.hp <= 0 ? `0%` : `${player.hp}%`;
    if (player.hp < 0) {
        gameOver();
    }
    
}

randomButton.addEventListener('click', () => {
    changePlayer(player1);
    changePlayer(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
