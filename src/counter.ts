const counter = {
    request: 0,
    response: 0,
    error: 0,
}

const updateCounter = (type: string) => {
    return counter[type] += 1;
}

module.exports = counter;
module.exports = updateCounter;