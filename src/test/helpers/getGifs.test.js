import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGif';

describe('Pruebas con getGifs Fetch', () => {

    test('Debe tener 10 elementos ', async () => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
        
    })
    
    test('Debe traer un array vacio [] ', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
        
    })
    
})
