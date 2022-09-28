exports.handler = async (event, context) => {
    const {httpMethod} = event;
    if (httpMethod === 'OPTIONS')
        return {
            statusCode: 204
        };

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'true',
            //event: event,
        })
    }
}
