function checkInventory(I, R) {
    let ids = [];

    if (Object.keys(R).length === 2) {
        const colorChoosed = R['color'];
        const sizeChoosed = R['size'];

        const idsOfColorChoosed = I.color[colorChoosed];
        const idsOfSizeChoosed = I.size[sizeChoosed];

        ids = idsOfColorChoosed.filter(id => idsOfSizeChoosed.includes(id));
    }

    if (Object.keys(R).length === 1) {
        const colorChoosed = R['color'];
        
        if (I.color[colorChoosed]) {
            ids = I.color[colorChoosed];
        } else {
            ids = [];
        }
    }

    return ids;
}

const I = {
    color: {
        blue: [123, 456, 789],
        red: [234, 567, 890],
    },
    size: {
        small: [123, 234],
        medium: [456, 789],
        large: [567, 890],
    },
};

const R1 = { color: 'red', size: 'small' };
const R2 = { color: 'red' };
const R3 = { color: 'green' };

console.log(checkInventory(I, R1));
console.log(checkInventory(I, R2));
console.log(checkInventory(I, R3));