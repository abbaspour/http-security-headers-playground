exports.handler = async (event, context) => {

    console.log(event);
    const { cookie = ''} = event.headers;
    const cookies = cookie.split(';');

    console.log(cookies);
    let text = '';

    for(const [i, c] of cookies.entries()) {
        console.log(i, c);
        text += `<text x="10" y="${(i+1) * 10}" class="heavy">${c}</text>`;
    }

    console.log(text);
    const svg = `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <style>
        .heavy {
        font: bold 8px monospaced;
        }
    </style>
    ${text}
</svg>`;

    return {
        'statusCode': 200,
        'headers': {
            'Cache-Control': 'no-cache',
            'Content-Type': 'image/svg+xml',
        },
        body: svg
    }
}
