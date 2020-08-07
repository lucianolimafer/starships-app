import apiresult from '../index';

const FETCH_STARSHIPS = "FETCH_STARSHIPS";

it('handles action do tipo FETCH_STARSHIPS', () => {
    const action = {
        type: FETCH_STARSHIPS,
        payload: ['New StarShip']
    };

    const newState = apiresult([], action);
    expect(newState).toEqual(['New StarShip']);
});

it('handles action do tipo (unknown) desconhecido', () => {
    const newState = apiresult([], { type: 'RANDOM'});
    expect(newState).toEqual([]);
});