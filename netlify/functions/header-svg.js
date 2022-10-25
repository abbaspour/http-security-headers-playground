exports.handler = async (event, context) => {

    console.log(event);
    const name = event.queryStringParameters.name ?? 'cookie';
    const line = event.headers[name] ?? '';
    const cookies = line.split(';');

    console.log(cookies);
    let text = '';

    for(const [i, c] of cookies.entries()) {
        console.log(i, c);
        text += `<text x="10" y="${(i+1) * 10}" class="heavy">${c}</text>`;
    }

    console.log(text);
    const svg = `<svg width="600px" height="50px" xmlns="http://www.w3.org/2000/svg">
    <style>
        .heavy {
        font: bold 14px monospaced;
        }
    </style>
    ${text}
</svg>`;

    return {
        'statusCode': 200,
        'headers': {
            'Cache-Control': 'private',
            'Content-Type': 'image/svg+xml',
        },
        body: svg
    }
}
