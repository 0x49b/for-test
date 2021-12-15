export {testForLoop, testForEach, testForOf, testForIn}

const NUM_OF_ELEMENTS = 10_000_000;

const testForLoop = _ => {
    const largeArray = [...Array(NUM_OF_ELEMENTS).keys()];
    const startforloop = Date.now();
    for (let i = 0; i < largeArray.length; i++) {
    }
    return Date.now() - startforloop;
}

const testForEach = _ => {
    const largeArray = [...Array(NUM_OF_ELEMENTS).keys()];
    let startforeach = Date.now();
    largeArray.forEach(() => {
    });
    return Date.now() - startforeach;
}

const testForOf = _ => {
    const largeArray = [...Array(NUM_OF_ELEMENTS).keys()];
    const startforof = Date.now();
    for (const e of largeArray) {
    }
    return Date.now() - startforof;
}

const testForIn = _ => {
    const largeArray = [...Array(NUM_OF_ELEMENTS).keys()];
    let startforin = Date.now();
    for (const e in largeArray) {
    }
    return Date.now() - startforin;
}