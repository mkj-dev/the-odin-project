// Basic math functions
function add(...args) {
    let result = 0;
    args.forEach(arg => {
        result += arg;
    });
    return result;
}

function subtract(...args) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        result -= args[i];
    }
    return result;
}

function multiply(...args) {
    let result = args[0];
    args.forEach(arg => {
        result *= arg;
    });
    return result;
}

function divide(...args) {
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] === 0) {
            alert('You can\'t do that!');
        } else {
            result /= args[i];
        }
    }
    return result;
}