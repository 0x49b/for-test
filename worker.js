import {testForEach, testForIn, testForLoop, testForOf} from "./tests.js";

addEventListener('message', e => {
    const result = {
        name: e.data,
        time: 0
    }
    switch (e.data) {
        case "testForEach":
            result.time = testForEach();
            break;
        case "testForIn":
            result.time = testForIn();
            break;
        case "testForLoop":
            result.time = testForLoop();
            break;
        case "testForOf":
            result.time = testForOf();
            break;
    }
    postMessage(result);
    close();
});