const axios = require('axios');
const { address, queryForTest } = require('./config/config');
const mockserver = require('./test/mockSourceServer');
const dictionaryFromMock = '[["and",{"word":"and","repetitions":4}],["the",{"word":"the","repetitions":2}],["beginning",{"word":"beginning","repetitions":1}],["of",{"word":"of","repetitions":2}],["his",{"word":"his","repetitions":1}],["kingdom",{"word":"kingdom","repetitions":1}],["was",{"word":"was","repetitions":1}],["babel",{"word":"babel","repetitions":1}],["erech",{"word":"erech","repetitions":1}],["accad",{"word":"accad","repetitions":1}],["calneh",{"word":"calneh","repetitions":1}],["in",{"word":"in","repetitions":1}],["land",{"word":"land","repetitions":1}],["shinar",{"word":"shinar","repetitions":1}]]'

mockserver();

let func = async () => {
    const { data } = await axios.get(`${address}${queryForTest}`);
    console.log(JSON.stringify(data))
    console.log('-----------------');

    console.log(JSON.stringify(dictionaryFromMock));


    console.log('-----------------');

    console.log(JSON.stringify(data) === JSON.stringify(JSON.parse(dictionaryFromMock));
}

func()