
import React from 'react'
import { shallow } from 'enzyme'; 
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <addCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = { setCategories } />);

    beforeEach(() => {
        /* cada vez que se ejecute un test se reestablecen o limpien
           todos los mock/simulaciones/funciones en caso de q existan*/
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    })

    test('Debe de mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Debe de cambiar la caja de texto ', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        /* El 2do parametro de la funcion simulate representa el objeto 'e'
           que se pasa al dispararse el evento onChange */
        input.simulate('change', { target: { value: value } });

       expect( wrapper.find('p').text().trim() ).toBe( value );        
    })

    test('No debe de postear la informacion con submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        // verifico que la func setCategories no fue llamada
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('Debe de llamar la función setCategories y limpia la caja de texto', () => {

        const value = 'Hola mundo';

        //1. Simular el inputChangue
        wrapper.find('input').simulate('change', { target: { value: value } });
        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        

        //3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); // que haya llamado una vez
        //Valido que la funcion setCategories se haya llamado con un argumento que es una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );


        //4. El valor del input debe estar en ''
        expect( wrapper.find('input').prop('value') ).toBe('')

    })

})