
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const keys = document.querySelector('.keys');

let expression = '';
let lastAns = '';

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target.dataset.key;
        const action = e.target.textContent;

        if (key === 'clear') {
            expression = '';
            input.textContent = '';
            result.textContent = '';
        } else if (key === '=') {
            try {
                const evalResult = eval(expression);
                result.textContent = evalResult;
                lastAns = evalResult;
            } catch (error) {
                result.textContent = 'Error';
            }
        } else if (key === 'sign') {
            expression = `-${expression}`;
            input.textContent = expression;
        } else if (key === '%') {
            expression = `${expression}/100`;
            input.textContent = expression;
        } else {
            expression += action;
            input.textContent = expression;
        }
    }
});
