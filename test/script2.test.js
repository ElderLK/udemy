const fetch = require('node-fetch');
const swapi = require('./script2');


it('call swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then( data => {
        expect(data.count).toEqual(82);
    })
})

it('call swapi to get people with promise', (done) => {
    expect.assertions(1);
    swapi.getPeoplePromise(fetch).then( data => {
        expect(data.count).toEqual(82);
        done();
    }).catch((e) => {
        console.log('Error ===>', e)
    })
})
