function parseCurrency(value: string) {
    return parseFloat(value.replace('$', ''));
}
function formatCurrency(value: number) {
    return `$${value.toFixed(2)}`;
}

function addCurrencies(value1: string, value2: string) {
    const num1 = parseCurrency(value1);
    const num2 = parseCurrency(value2);
    const sum = num1 + num2;
    return formatCurrency(sum);
}

export { parseCurrency, formatCurrency, addCurrencies } 
