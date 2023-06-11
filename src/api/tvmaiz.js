const Base_url = "https://api.tvmaze.com";

const apiget = async (queryget) =>{
    // throw new Error ("Somthing bad happened");
    const responce = await fetch(`${Base_url}${queryget}`)
    const body = await responce.json();

    return body;
}

export const searchForShows =(query) => apiget(`/search/shows?q=${query}`)