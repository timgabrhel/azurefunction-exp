module.exports = function (context, input, myTable) {
    context.log('Node.js manually triggered function called with input', input);
    context.log(JSON.stringify(myTable));
    context.log(JSON.stringify(context));
    context.done();
};