const gameWindow = document.querySelector('.game-window');

export default class CreateCard {
    constructor(src, index) {
        this.src = src;
        this.index = index;
    }

    render() {
        let card = document.createElement('div');
        let img = document.createElement('img');
        card.classList.add('card');
        card.setAttribute('data-id', this.index);
        img.classList.add('card__img');
        img.setAttribute('src', this.src);
        card.append(img);
        gameWindow.append(card);
    }
}