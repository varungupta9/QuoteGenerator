let newQuote=[]
const quoteContent = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')



function loading(){
    loader.hidden= false
    quoteContent.hidden=true
}
function complete(){
    loader.hidden= true
    quoteContent.hidden=false
}

function randomQuote()
{
    loading();
    const quote = newQuote[Math.floor(Math.random() * newQuote.length)]
   if(!quote.author){
       quoteAuthor.textContent="Anonymous"
   }
   else{
    quoteAuthor.textContent=quote.author}
    quoteText.textContent=quote.text
    complete()
    
}

async function getQuotes(){
   loading() 
 const apiUrl = "https://type.fit/api/quotes"
 try {
     const response = await fetch(apiUrl)
     newQuote = await response.json()
     randomQuote()
 } catch (error) {
     
 }

}
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(twitterUrl,'_blank')
}

newQuoteBtn.addEventListener('click', randomQuote)
twitterBtn.addEventListener('click',tweetQuote)
getQuotes();
