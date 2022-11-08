exports.handler = async (event, context) => {
    //console.log(event);
    const {httpMethod, headers} = event;
    const {origin = '*'} = headers;

    if (httpMethod === 'OPTIONS') {
        if (origin.startsWith('https://www.'))
            return {
                statusCode: 204,
                headers: {
                    "Access-Control-Allow-Origin": origin,
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Max-Age": 0
                }
            };
        else {
            return {
                statusCode: 204,
                headers: {
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Max-Age": 0
                }
            };
        }
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Max-Age": 0,
            "content-type": 'application/json'
        },
        body: JSON.stringify({origin})
    }
}
