exports.handler = async (event, context) => {

    //console.log(event);
    const name = event.queryStringParameters.name ?? 'cookie';
    const line = event.headers[name] ?? '';
    const cookies = line.split(';');

    console.log(cookies);
    let text = '';

    let max = 0;

    for(const [i, c] of cookies.entries()) {
        console.log(i, c);
        text += `<text x="10" y="${(i+1) * 15}" class="heavy">${c}</text>`;
        max = i + 1;
    }

    console.log(text);
    const svg = `<svg width="600px" height="${(max+1) * 15}" xmlns="http://www.w3.org/2000/svg">
    <style>
        .heavy {
        font: 14px "DM Sans";
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
