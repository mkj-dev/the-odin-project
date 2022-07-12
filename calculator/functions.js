// Basic math functions
function add(...args) {
    let result = 0;
    args.forEach(arg => {
        result += arg;
    });
    return result;
}