//http://api.forismatic.com/api/1.0/

function constructApiUrl() {
    const proxyUrl = 'https://young-sierra-21800.herokuapp.com/';
    const method = 'getQuote';
    const lang = 'en';
    const format = 'json';
    const apiUrl = `http://api.forismatic.com/api/1.0/?method=${method}&lang=${lang}&format=${format}`;
    return { proxyUrl, apiUrl };
}

function updateQuoteText(data) {
    if (data.quoteText.lengh > 50) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
}

function updateAuthor(data) {
    if (data.quoteAuthor === '') {
        authorText.innerText = 'Unknown';
    }
    else {
        authorText.innerText = data.quoteAuthor;
    }
}


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function showLodingSpiner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}


function removeLoadingSpinner(){
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}


async function getQuote(){
    showLodingSpiner();
    const { proxyUrl, apiUrl } = constructApiUrl();

    try{
        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        updateAuthor(data);
        updateQuoteText(data);

        quoteText.innerText=data.quoteText
        removeLoadingSpinner();
    }catch(error){
        getQuote();
    }

}

// Event Listeners
newQuoteBtn.addEventListener('click',getQuote);

//on load
getQuote();


