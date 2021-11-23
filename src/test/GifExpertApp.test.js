import React from 'react'
import { shallow } from 'enzyme'; 
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas del componente <GifExpertApp />', () => {

    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrarse una lista de categorias', () => {

        const defaultCategories = ['One Punch', 'Goku'];
        
        const wrapper = shallow(<GifExpertApp defaultCategories = {defaultCategories}/>)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( defaultCategories.length );
        
    })
    
    
})