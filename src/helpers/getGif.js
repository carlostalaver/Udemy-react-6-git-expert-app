// encodeURI(category) para zanitizar el query paramer je: encodeURI("hola como estas") --> 'hola%20como%20estas'
// notar que la funcion por usar el async retornará una promesa
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=rmjnJ8JufMbaZuvHRDzFY7TEND5gVrhL`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // filtro las propiedades que solo necesitaré
    const gitfs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, //notar el uso del operar  --> ? <--, se lee, si img.images está ps dame downsized_medium.url
        }
    })
    return gitfs;
}