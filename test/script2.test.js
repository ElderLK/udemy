const fetch = require('node-fetch');
const swapi = require('./script2');


it('call swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then( data => {
        expect(data.count).toEqual(82);
    })
})

it('call swapi to get people with promise', async (done) => {
    expect.assertions(2);
    const data = await swapi.getPeoplePromise(fetch);
    await expect(data.count).toEqual(82);
    await expect(data.results.length).toBeGreaterThan(2);
    done();
})


it('getPeople returns count and result', () => {
    const mockFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve({
                count: 82,
                results: [0, 1, 2, 3, 4, 5]
            })
        })
    );

    expect.assertions(3);
    return swapi.getPeoplePromise(mockFetch).then((data)=> {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        expect(data.count).toEqual(82);
    })
})