import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; 
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title ="Un titulo";
    const url = "https://localhost/algo.jpg"
    
    const wrapper = shallow(<GifGridItem title= { title } url = { url } />);
    
    test('Debe de mostrar el componente correctamente ', () => {
        expect( wrapper).toMatchSnapshot();
    })
    
    test('Debe tener un parrafo  con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('Debe de tener la imagen igual al url  y alt de los props', () => {
        const img = wrapper.find('img'); // ojo que como es un solo elemento img no hay necesidad de usar .at(indice)
        // console.log(img.props());  con S en propS
        // console.log(img.prop('src'));  Sin s
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    })
    
    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const animate__fadeIn = 'animate__fadeIn';
        expect( div.prop("className").includes(animate__fadeIn)).toBe(true);
    })
    
})
