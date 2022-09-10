window.onload = (() => {
    const buttons = document.getElementsByTagName('button')
    const display = document.getElementById('display')
    let operation = null
    let expression = firstNumber = secondNumber = 0

    const evtHandler = (evt => {
        // evt.target.value refers to the clicked <button> element
        let value = evt.target.value

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                operation = value
                if (firstNumber !== 0) {
                    secondNumber = parseFloat(expression)
                    let result = operators[operation](firstNumber, secondNumber)
                    display.value = expression = result
                } else {
                    firstNumber = parseFloat(expression)
                }
                expression = 0
                break
            case '=':
                secondNumber = parseFloat(expression)
                let result = operators[operation](firstNumber, secondNumber)
                display.value = expression = result
                firstNumber = secondNumber = 0
                break
            case 'clear':
                display.value = 0
                expression = firstNumber = secondNumber = 0
                break
            default:
                expression += value
                expression = parseFloat(expression)
                display.value = expression
                break
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = evtHandler
    }

    const operators = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        '*': function (a, b) { return a * b },
        '/': function (a, b) { return a / b }
    }
})