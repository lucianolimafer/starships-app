import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchStarships } from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



const FETCH_STARSHIPS = "FETCH_STARSHIPS";

describe('fetchStarShips', () => {
    it('cria FETCH_STARSHIPS após buscar starships', () => {
        const store = mockStore({ response: [] })

        return store.dispatch(fetchStarships(1)).then(() => {
            expect(store.getActions()[0].type).toEqual(FETCH_STARSHIPS);
        });
    });
});