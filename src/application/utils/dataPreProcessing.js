const dataPreProcessing = (data) => {
    const onlyNotAlphanumericRegex = /[^a-z0-9]/gi
    const preProcessedData = data
        .toLowerCase()
        .replace(onlyNotAlphanumericRegex, ' ')
        .split(' ');
    return preProcessedData;
}

module.exports = dataPreProcessing;

