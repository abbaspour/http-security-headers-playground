exports.handler = async (event, context) => {
    //console.log(event);
    const {httpMethod, headers} = event;
    const {origin = '*'} = headers;

    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Max-Age": 0
            }
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Max-Age": 0,
            "content-type": 'application/json'
        },
        body: JSON.stringify({origin})
    }
}
