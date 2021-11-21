import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Goku']);
/* 
    const handleAdd = () => {
        setCategories(['HunterXHunter', ...categories]); // modificando el estado a traves de la propia referencia al array  categories
        setCategories(categ => ['HunterXHunter', ...categ]); // modificando el estado a treves un callback, para modificar el estado puedo usar cualquiera de las dos formas
    }; */

    return (
        <>
            <h2> GifExpertApp </h2>
            {/*  notar que le estoy pasando la referencia de setCategories al componente HIJO */}
            <AddCategory setCategories = { setCategories }/> 

           {/*  Esta seria una nueva forma de llamar al componente AddCategory */}
            {/* <AddCategory
                setCategories={(categories) => {
                    setCategories(categories);
                }}
            /> */}
            <hr/>
            <ol>
                {
                    categories.map((category) => ( // no se puede usar un for porque no es una expresion de js que retorne un valor
                        <GifGrid   // notar que no estoy usando un return xq uso un ( ) para sustituirlo
                            key={ category }  // se le asigna un key porque estoy iterando el componenete GifGrid
                            category= { category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
