import axios  from "axios";


const  GetSearchMulti = async (query:string, page:number) => {
    let api_key = "6ee4f3b44fe1f0759d27a646e267644e"

    const response = await axios.get("https://api.themoviedb.org/3/search/multi?api_key="+api_key+"&language=pt-BR&query="+ query+"&page="+page+"&include_adult=false")
    .then((res: any)=> res.data)
    return response
}

const GetDetails = async (id: any, type:any)=>{
    let api_key = "6ee4f3b44fe1f0759d27a646e267644e"

    if(type === 'tv')
    {
        const response = await axios.get("https://api.themoviedb.org/3/tv/"+id +"?api_key="+api_key+"&language=pt-BR")
        .then((res: any)=> res.data)
        return response
    }
    else if(type === 'person'){
        const response = await axios.get("https://api.themoviedb.org/3/person/"+id+"?api_key="+api_key+"&language=pt-BR")
        .then((res: any)=> res.data)
        return response
    }
    else if(type === 'movie')
    {
        const response = await axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key="+api_key+"&language=pt-BR")
        .then((res: any)=> res.data)
        return response
    }
}

const getLastCast = async (id:any) =>{
    let api_key = "6ee4f3b44fe1f0759d27a646e267644e";

    const response = await axios.get("https://api.themoviedb.org/3/person/"+id+"/movie_credits?api_key="+api_key+"&language=pt-BR")
        .then((res: any)=> res.data)
        return response
}

export {GetSearchMulti, GetDetails, getLastCast};