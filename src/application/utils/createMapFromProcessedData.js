const createMapFromProcessedData = (processedDataArray, wordsMap, skipLastWord = false) => {
    for (let [index, word] of processedDataArray.entries()) {
        if (!word) {
            continue;
        }
        if (index === processedDataArray.length - 1 && skipLastWord) {
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