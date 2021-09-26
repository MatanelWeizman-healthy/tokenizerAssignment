
const axios = require('axios');

const App = require('../src/application/App');
const { address, queryForTest } = require('../config/config');
const mockServer = require('./mockSourceServer');
const dictionaryFromMock = '[["and",{"word":"and","repetitions":4}],["the",{"word":"the","repetitions":2}],["beginning",{"word":"beginning","repetitions":1}],["of",{"word":"of","repetitions":2}],["his",{"word":"his","repetitions":1}],["kingdom",{"word":"kingdom","repetitions":1}],["was",{"word":"was","repetitions":1}],["babel",{"word":"babel","repetitions":1}],["erech",{"word":"erech","repetitions":1}],["accad",{"word":"accad","repetitions":1}],["calneh",{"word":"calneh","repetitions":1}],["in",{"word":"in","repetitions":1}],["land",{"word":"land","repetitions":1}],["shinar",{"word":"shinar","repetitions":1}]]'




describe('e2e test', () => {
    it('tokenize words from mock server', async () => {
        try {
            const mockListener = mockServer()
            console.log = jest.fn().mockReturnValue(); // for cleaner output
            const app = new App()
            let b = await app.start()
            const { data } = await axios.get(`${address}${queryForTest}`);
            expect(JSON.stringify(data)).toEqual(JSON.stringify(JSON.parse(dictionaryFromMock)));
            b.close()
            mockListener.close();
        } catch (error) {
            throw error;
        }
    });
});
