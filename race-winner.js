function raceWinner(racer_time) {
    let result;

    const timers = racer_time.map(racer => racer.time);

    const noWinner = timers.every((time) => time === 'dnf');

    const noContest = timers.filter(time => time !== 'dnf').length === 1;

    const peopleWhoFinished = timers.filter(time => time !== 'dnf');


    if (noWinner) {
        result = 'There is no winner';
    }
    if (noContest) {
        const winner = racer_time.find(racer => racer.time !== 'dnf');
        
        result = `${winner.name} won by no contest`;
    }

    return result;
}

const racer_time1 = [
    {
        name: 'Samuel',
        time: '05:42:14',
    },
    {
        name: 'Fred',
        time: '05:12:53',
    },
    {
        name: 'Cynthia',
        time: 'dnf',
    },
];

const racer_time2 = [
    {
        name: 'Samuel',
        time: 'dnf',
    },
    {
        name: 'Fred',
        time: '05:12:53',
    },
    {
        name: 'Cynthia',
        time: 'dnf',
    },
];

const racer_time3 = [
    {
        name: 'Samuel',
        time: 'dnf',
    },
    {
        name: 'Fred',
        time: 'dnf',
    },
    {
        name: 'Cynthia',
        time: 'dnf',
    },
];

console.log(raceWinner(racer_time1));
console.log(raceWinner(racer_time2));
console.log(raceWinner(racer_time3));