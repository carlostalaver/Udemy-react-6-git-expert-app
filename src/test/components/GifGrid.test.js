import React from 'react'
import { shallow } from 'enzyme'; 
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //para que esto funcione tengo que importar ->import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Pruebas en el <GifGrid >', () => {
    const category = 'One Punch';


    test('Debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category = { category } />);

        expect( wrapper ).toMatchSnapshot();
    })


    test('Debe de mostrar items cuando se cargan imagenes con el hook useFetchGifs', () => {

        const gifs = [{
            id:'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: !true
        });
        
        // 1 creo un mock para simular la respuesta de useFetchGifs
        const category = 'One Punch';

        const wrapper = shallow(<GifGrid category = { category } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( !true );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );



    })
    
})