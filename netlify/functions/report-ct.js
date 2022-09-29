exports.handler = async (event, context) => {
    console.log(`ct report: ${event}`);
    return {
        statusCode: 204
    };
}
