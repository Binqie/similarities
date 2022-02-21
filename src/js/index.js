import '@styles/styles';
import drawField from './modules/drowfield';
import shuffle from './modules/shuffle';
import startGame from './modules/startgame';

import discord      from '@img/easy_mode/discord';
import instagram    from '@img/easy_mode/instagram';
import music        from '@img/easy_mode/music';
import netflix      from '@img/easy_mode/netflix';
import spotify      from '@img/easy_mode/spotify';
import tiktok       from '@img/easy_mode/tiktok';
import twitter      from '@img/easy_mode/twitter';
import youtube      from '@img/easy_mode/youtube';

import texture1     from '@img/hard_mode/texture1';
import texture2     from '@img/hard_mode/texture2';
import texture3     from '@img/hard_mode/texture3';
import texture4     from '@img/hard_mode/texture4';
import texture5     from '@img/hard_mode/texture5';
import texture6     from '@img/hard_mode/texture6';
import texture7     from '@img/hard_mode/texture7';
import texture8     from '@img/hard_mode/texture8';

const easyCardsUrls = [
    discord,
    instagram,
    music,
    netflix,
    spotify,
    tiktok,
    twitter,
    youtube,
];

const hardCardsUrls = [
    texture1,
    texture2,
    texture3,
    texture4,
    texture5,
    texture6,
    texture7,
    texture8,
];

let currentLevel = localStorage.getItem('level') === 'hard' ? hardCardsUrls : easyCardsUrls;
document.querySelector(`#${localStorage.getItem('level') || 'easy'}`).classList.add('active');

const indexes = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

const options = document.querySelector('.options'),
      startBtn = document.querySelector('#start'),
      restartBtns = document.querySelectorAll('#restart');


startBtn.addEventListener('click', () => {
    startGame(currentLevel, indexes);
});


options.addEventListener('click', e => {
    if (e.target === options || e.target.getAttribute('id') === 'restart') return;

    document.querySelectorAll('.game-mode').forEach(item => {item.classList.remove('active')});

    e.target.classList.add('active');
    localStorage.setItem('level', e.target.getAttribute('id'));

    e.target.getAttribute('id') === 'easy' ? currentLevel = easyCardsUrls : currentLevel = hardCardsUrls;
})


restartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        startGame(currentLevel, indexes);
    })
})

