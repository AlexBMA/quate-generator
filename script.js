//http://api.forismatic.com/api/1.0/

//get Quote From api

async function getQuate(){

    const proxyUrl = 'https://young-sierra-21800.herokuapp.com/';
    const method = 'getQuote';
    const lang = 'en';
    const format ='json'
    const apiUrl = `http://api.forismatic.com/api/1.0/?method=${method}&lang=${lang}&format=${format}`;

    try{
        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        console.log(data);
        
    }catch(error){
        getQuate();
        console.log(' whoops, no quote',error);
    }

}


//on load
getQuate();