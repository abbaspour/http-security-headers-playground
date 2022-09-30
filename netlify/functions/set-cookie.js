exports.handler = async (event, context) => {
    const {host} = event.headers;
    let domain = host.replace(/^[^\\.]*/, '');
    domain = domain.replace(/:\d*$/, '');
    console.log(`host: ${host}`);
    console.log(`domain: ${domain}`);

    const html = `
  <html lang="en">
    <head>
      <title>cookie result</title>
      <meta charset="utf-8">
    </head>
    <body>
    cookie returned. click <a href="/cookie.html">here</a> to return to website. 
    </body>
  </html>`

    return {
        'statusCode': 200,
        'headers': {
            'Set-Cookie': [
                'clientSide=clientSide; Max-Age=3600; SameSite=none; Secure; Domain=' + domain,
                'sameSiteLax_httpOnly=sameSiteLax_httpOnly; Max-Age=3600; HttpOnly; SameSite=lax; Secure; Domain=' + domain,
            ],
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html',
        },
        'body': html
    }
}
