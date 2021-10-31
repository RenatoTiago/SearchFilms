const verifyIMG = (profile: any, poster: any) => {
    if (!!profile)
        return `http://image.tmdb.org/t/p/w185${profile}`

    else if (!!poster)
        return `http://image.tmdb.org/t/p/w185${poster}`

    else
        return "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
}

const convertDateBR = (dt: any) => {
    if (!!dt) {
        let date = dt.split("-")

        let dateformated = date[2] + "/" + date[1] + "/" + date[0];
        return dateformated
    }
    return "Não informado"
}

const calculateAge = (dt: any) => {
    if (!!dt) {
        let birthdate = new Date(dt);
        let today = new Date();

        let diferencaAnos = today.getFullYear() - birthdate.getFullYear();

        if (new Date(today.getFullYear(), today.getMonth(), today.getDate()) <
            new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate()))
            diferencaAnos--;

        return diferencaAnos;
    }
    return "Não informado"
}

export { verifyIMG, convertDateBR, calculateAge };