let titles = document.querySelector('#titles');
let menuChoose = document.querySelector('#main-title-container');
let game = document.querySelector('#main-game');
let multiplayer = document.querySelector('#single');
let singleP = document.querySelector('#cpu');
let cells = document.querySelector('.main-square--game');
let reloaded = document.querySelector('#reload');
let turns = document.querySelector('#currentPlayer')
let currentPlayer = document.getElementById('currentPlayer')
let footer = document.querySelector('footer');
let home = document.getElementById('homePage');
let players = document.getElementById('players');



multiplayer.addEventListener('click', () => {
  location.hash = '#multip='

})
singleP.addEventListener('click', () => {
  location.hash = '#singlep='
})
home.addEventListener('click', ()=>{
  location.hash = '#home='
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
  if(location.hash.startsWith('#multip=')) {
    multi();
  } else if (location.hash.startsWith('#singlep=')){
    singleCpu();
  } else{
    homepage()
  }
  function homepage(){
    menuChoose.classList.remove('inactive');
    game.classList.add('inactive');
    cells.classList.add('inactive');
    reloaded.classList.add('inactive');
    turns.classList.add('inactive');
    multiplayer.classList.remove('inactive');
    singleP.classList.remove('inactive');
    titles.classList.remove('inactive');
    all.forEach(i => {i.classList.add('inactive')});
    currentPlayer.classList.add('inactive');
    players.classList.add('inactive');
    footer.classList.add('inactive');
  }

  function multi(){
    console.log('aqui');
    menuChoose.classList.add('inactive');
    game.classList.remove('inactive');
    all.forEach(i => {i.classList.remove('inactive')});
    reloaded.classList.remove('inactive');
    turns.classList.remove('inactive');
    multiplayer.classList.add('inactive');
    singleP.classList.add('inactive');
    titles.classList.add('inactive');
    currentPlayer.classList.remove('inactive');
    players.classList.remove('inactive');
    titles.classList.add('inactive');
    footer.classList.remove('inactive');
    twoPlayers();
  }
  function singleCpu(){
    console.log('aqui2');
    menuChoose.classList.add('inactive');
    game.classList.remove('inactive');
    all.forEach(i => {i.classList.remove('inactive')});
    reloaded.classList.remove('inactive');
    turns.classList.remove('inactive');
    multiplayer.classList.add('inactive');
    singleP.classList.add('inactive');
    titles.classList.add('inactive');
    currentPlayer.classList.add('inactive');
    players.classList.add('inactive');
    titles.classList.add('inactive');
    footer.classList.remove('inactive');
    cpuGame();
  }
  reload?.addEventListener('click', function again(){
    all.forEach(i =>{
      i.innerHTML = '';
      i.disabled = false;
    })
  })

}
