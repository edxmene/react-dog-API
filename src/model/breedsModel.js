const getBreeds = async () => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const res = await fetch(url);
    if(!res.ok){
        const {url,status, statusText} = res;
        throw Error(`${status} ${statusText} in fetch ${url}`);
    }
    const breeds = await res.json();
    return breeds;
}

const getDog = async (dogID) => {
    let url;
    if(dogID === 0 || dogID === undefined){
        url = "https://api.thedogapi.com/v1/images/search";
    }else {
        url = `https://api.thedogapi.com/v1/images/search?breed_ids=${dogID}`;
    }
    const res = await fetch(url);
    if(!res.ok){
        const {url,status, statusText} = res;
        throw Error(`${status} ${statusText} in fetch ${url}`);
    }
    const dog = await res.json();
    return dog;
}

export {getBreeds, getDog};