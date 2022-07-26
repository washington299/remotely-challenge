function blindMice(mices) {
    const beforeCheese = mices.split('C')[0].trim();
    const afterCheese = mices.split('C')[1].trim();

    const quantityBeforeCheese = beforeCheese.split('~M').filter(mice => mice === 'M~').length;
    const quantityAfterCheese = afterCheese.split('M~').filter(mice => mice === '~M').length;
    
    return quantityBeforeCheese + quantityAfterCheese;
}

const micesWalking1 = "M~~M ~MM~C~MM~M~";
const micesWalking2 = "~M~M~MC M~~M";

console.log(blindMice(micesWalking1));
console.log(blindMice(micesWalking2));
