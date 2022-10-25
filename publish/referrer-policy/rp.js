function refererImg(co = false, divName = 'referer-img', downgrade = false) {
    const img = document.createElement('img');
    let prefix = '';
    const {origin} = window.location;
    if(co === true && origin) {
        prefix = origin.replace(/:\/\/www\./, '://api.');
    }

    const api = downgrade ? origin.replace(/^https/, 'http') : prefix;
    img.src = `${api}/.netlify/functions/header-svg?name=referer`;
    document.getElementById(divName).appendChild(img);
}
