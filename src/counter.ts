export const counter = {
    request: 0,
    response: 0,
    error: 0,
}

export const updateCounter = (type: string) => {
    return counter[type] += 1;
}