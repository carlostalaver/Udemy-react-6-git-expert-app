import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //#region trabajando con con hook nativos de react
       // const [images, setImages] = useState([]);

        /*UseEffect es usado para ejecutar bloques de codigo de manera condicionada
        el primer parametro es una funcion, y el 2do una lista de dependencies, si se le pasa el 2do parametro
        significa que el codigo que está dentro del useEffect se ejecutara una sola vez despues de que react haya
        renderizado el componente. Nota los useEffect NO PUEDEN SER ASYNC*/
/*         useEffect(() => {
            // getGifs( category ).then( imgs => setImages(imgs)); manera larga de hacerlo
            getGifs(category).then( setImages); // forma corta
        }, [category]); */

    //#endregion


    //#region trabajando con hook personalizados
        const {data:images, loading} = useFetchGifs(category);

        console.log(images);
    //#endregion

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">  {category} </h3>
            {  loading &&  <p className="card animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id} // se le asigna un key porque estoy iterando el componenete GifGridItem
                            {...img}  // ojo con esta manera de pasar propiedades a un componente
                        />
                    ))
                }
            </div>
        </>
    )
}
