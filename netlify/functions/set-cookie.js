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
      <link href="/style.css" rel="stylesheet"/>
    </head>
    <body>
    cookie returned. click <a href="/">here</a> to return to website. 
    </body>
  </html>`

    return {
        'statusCode': 200,
        'headers': {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html',
        },
        'multiValueHeaders': {
            'Set-Cookie': [
                'clientSide=present; Max-Age=3600; SameSite=none; Secure; Path=/; Domain=' + domain,
                'sameSite_none=present; Max-Age=3600; HttpOnly; SameSite=none; Secure; Path=/; Domain=' + domain,
                'sameSite_lax=present; Max-Age=3600; HttpOnly; SameSite=lax; Secure; Path=/; Domain=' + domain,
                'sameSite_strict=present; Max-Age=3600; HttpOnly; SameSite=strict; Secure; Path=/; Domain=' + domain,
            ],
        },
        'body': html
    }
}
