import CreateCard from "./createcard";

export default function drawField(obj, arr) {
    document.querySelector('.game-window').innerHTML = '';

    for (let i = 0; i < 16; i++) {
        new CreateCard(obj[arr[i]], arr[i]).render();
    }
}