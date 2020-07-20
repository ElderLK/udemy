const fetch = require('node-fetch');


const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        return {
            count: data.count,
            results: data.results
        }
    })
}

const getPeople = async (fetch) => {
    const responseApi = await fetch('https://swapi.dev/api/people');
    const data = await responseApi.json();

    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}
