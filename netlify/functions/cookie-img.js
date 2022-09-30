const { createCanvas } = require('canvas');

exports.handler = async (event, context) => {

    console.log(event);
    const { cookie } = event.headers;
    const cookies = cookie.replace(/; /g, '\n');

    const canvas = createCanvas(400, 200);
    const ctx = canvas.getContext('2d');

    ctx.font = '16px Impact';
    ctx.fillText(cookies, 20, 20);

    return {
        'statusCode': 200,
        isBase64Encoded: true,
        'headers': {
            'Cache-Control': 'no-cache',
            'Content-Type': 'image/png',
        },
        body: canvas.toDataURL().replace('data:image/png;base64', '')
    }
}
