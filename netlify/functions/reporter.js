exports.handler = async (event, context) => {
    console.log(event.body);
    return {
        statusCode: 204,
        headers: {
            "content-type": 'text/plain'
        }
    }
}
