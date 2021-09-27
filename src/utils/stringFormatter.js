export const splitBigNumber = value => {
    const splitingString = value.toString().split('').reverse();
    return splitingString.map((currentValue, index) => {
        return (index % 3 === 0) ? `${currentValue} ` : currentValue;
    }).reverse().join('');
};