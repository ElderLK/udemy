import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {

    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'});
    })

})

describe('requestRobots', () => {
    const initialState = {
        robots: [],
        isPending: false
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
    })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({
            robots: [],
            isPending: true
        });
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 123,
                name: 'test',
                email: 'email@email.com'
            }]
        })).toEqual({
            robots: [{
                id: 123,
                name: 'test',
                email: 'email@email.com'
            }],
            isPending: false
        });
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Noooo!'
        })).toEqual({
            error: 'Noooo!',
            robots: [],
            isPending: false
        });
    })
      
})
