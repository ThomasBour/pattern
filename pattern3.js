const main = document.querySelector('main')

const parlote = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`;
const separation = text.split(' ');

const rectangle = document.createElement('input');
main.appendChild(rectangle);

rectangle.type = 'text'

rectangle.addEventListener('keyup', (e)=>{
    const inputValue = e.target.value
    const pattern = new RegExp(inputValue, 'gi')

    for (let i = 0;i<separation.length; i++) {
        if (separation[i].match(pattern)){
            console.log(separation[i]);
        }
    }

})