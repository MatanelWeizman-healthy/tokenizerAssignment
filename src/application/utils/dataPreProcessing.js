const dataPreProcessing = (data) => {
    const onlyNotAlphanumericRegex = /[^a-z]/gi
    const preProcessedData = data
        .toLowerCase()
        .replace(onlyNotAlphanumericRegex, ' ')
        .split(' ');
    return preProcessedData;
}

module.exports = dataPreProcessing;

