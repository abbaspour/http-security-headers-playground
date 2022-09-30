exports.handler = async (event, context) => {

    console.log(event.headers);

    const {
        'sec-fetch-user': user = '-',
        'sec-fetch-site': site,
        'sec-fetch-mode': mode,
        'sec-fetch-dest': dest
    } = event.headers;
    const html = `
  <html lang="en">
    <head>
      <title>sec-fetch-* result</title>
      <meta charset="utf-8">
    </head>
    <body>
    <table>
        <tr>
            <td>sec-fetch-user</td><td>${user}</td>
        </tr>
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
  </html>`;

    return {
        'statusCode': 200,
        'headers': {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html',
        },
        'body': html
    }
}
