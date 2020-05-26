onmessage = function (ev) {
    // object is passed as simple structure with type and data
    // create a buffer from data and convert to a string before 
    // JSON.parse() and return the json 
    const buf = Buffer.from(ev.data.data)
    const str = buf.toString()
    const json = JSON.parse(str)
    postMessage(json);
};