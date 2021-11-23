import React from 'react'
import { shallow } from 'enzyme'; 
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook personalizado useFetchGifs', () => {

    test('Debe de retornar el estado inicial ', async () => {

        //Para poder usar un hook personalizado debo hacer uso de la libreria renderHook, ojo que renderhook
        //DEBE retornar una funcion 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'))
        const { data, loading } = result.current;


        await  waitForNextUpdate(); // Ojo que debe ir despues del const { data, loading } = result.current;  xq sino retorna un array con 10 elementos

        expect( data ).toEqual( [] );
        expect( loading ).toBe(true); 
    })

     test('Debe de retornar un arreglo de imagenes el loading en false', async () => {

        //Para poder usar un hook personalizado debo hacer uso de la libreria renderHook, ojo que renderhook
        //DEBE retornar una funcion 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'))
        
        await  waitForNextUpdate(); // fijaros que va antes de  const { data, loading } = result.current;

        const { data, loading } = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe(false);
    }) 
    
})