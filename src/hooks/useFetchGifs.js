import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif";

// un hook personalizado no es mas que una funcion js
// notar que el parametro category no se está desestructurando ni tampoco se asigna a obj prop
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { // el call back del useEffect NO PUEDE USAR  la palabra async
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [category]); // el efecto se disparará cuando la categoria cambie, por eso la paso como parametro

    return state;
}