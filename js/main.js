let p = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores beatae eius necessitatibus porro qui id, quas dolor itaque quis, pariatur, tempora eveniet hic adipisci cum? Inventore incidunt quia et, explicabo.',
    i = 0,
    letter = '',
    interval;

function writeLetters(char) {
    letter += char.charAt(i);
    i++;
    let new_letter = document.querySelector('p');
    new_letter.innerHTML = letter;
}


interval = setInterval(function() {
    if (i < p.length) {
        writeLetters(p);
    } else {
        clearInterval(interval)
    }
}, 30)


console.log('Try!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')