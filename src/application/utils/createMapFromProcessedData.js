const createMapFromProcessedData = (processedDataArray) => {
    const wordsMap = new Map();
    for (let word of processedDataArray) {
        if (!word) {
            continue;
        }
        word = word.trim();
        if (wordsMap.has(word)) {
            wordsMap.set(word, {
                word,
                repetitions: wordsMap.get(word).repetitions + 1,
            });
        } else {
            wordsMap.set(word, {
                word,
                repetitions: 1,
            });
        };
    };
    return wordsMap;
};

module.exports = createMapFromProcessedData;