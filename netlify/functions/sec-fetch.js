exports.handler = async (event, context) => {

    console.log(event.headers);

    const {
        'sec-fetch-site': site,
        'sec-fetch-mode': mode,
        'sec-fetch-dest': dest,
        'accept' : accept = 'text/html'
    } = event.headers;

    const body = accept.startsWith('text/html') ?
        `<html lang="en">
    <head>
      <title>sec-fetch-* result</title>
      <meta charset="utf-8">
    </head>
    <body>
    <table>
        <tr>
            <td>sec-fetch-site</td><td>${site}</td>
        </tr>
        <tr>
            <td>sec-fetch-mode</td><td>${mode}</td>
        </tr>
        <tr>
            <td>sec-fetch-dest</td><td>${dest}</td>
        </tr>
    </table>
    </body>
  </html>` :
        `<svg width="600px" height="60px" xmlns="http://www.w3.org/2000/svg">
    <style>
        .heavy {
        font: 14px "DM Sans";
        }
    </style>
    <text x="10" y="10" class="heavy">sec-fetch-site: ${site}</text>    
    <text x="10" y="30" class="heavy">sec-fetch-mode: ${mode}</text>    
    <text x="10" y="50" class="heavy">sec-fetch-dest: ${dest}</text>    
</svg>`
    ;

    return {
        'statusCode': 200,
        'headers': {
            'Cache-Control': 'no-cache',
            'Content-Type': accept.startsWith('text/html') ? 'text/html' :  'image/svg+xml',
        },
        body
    }
}
