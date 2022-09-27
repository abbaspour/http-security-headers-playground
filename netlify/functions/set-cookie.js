const cookie = require('cookie')

exports.handler = async (event, context) => {
    const hour = 3600000
    const twoWeeks = 14 * 24 * hour
    const myCookie = cookie.serialize('my_cookie', 'lolHi', {
        secure: false,
        httpOnly: true,
        path: '/',
        maxAge: twoWeeks,
    })
    const html = `
  <html lang="en">
    <head>
      <title>cookie result</title>
      <meta charset="utf-8">
    </head>
    <body>
    cookie returned. click <a href="/">here</a> to return to website. 
    </body>
  </html>`

    return {
        'statusCode': 200,
        'headers': {
            'Set-Cookie': myCookie,
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html',
        },
        'body': html
    }
}
