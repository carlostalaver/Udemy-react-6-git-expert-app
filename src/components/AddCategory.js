import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => { // setCategories es una referencia a la funcion del mismo nombre que será pasada donde sea que se use este componente "AddCategory"
    const [inputValue, setInputValue,] = useState('');

    const handleInputChange = (e) => {

        setInputValue(e.target.value);
    };

    // esta función se dispara al presionar la tecla enter
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){

            // el argumento de setCategories es una funcion ya que no le estoy pasando el 
            // estado al component AddCategory, de esta manera puedo tener acceso a su referencia
            setCategories(cats => [ inputValue, ...cats ]); 
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p>

            <input 
                type="text"
                value= {inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = { // notar que la p es en minuzcula
    setCategories: PropTypes.func.isRequired, // aquí es P en MAYUZCULA, le indico que la funcion setCategories es REQUERIDA

}