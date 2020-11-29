var inputText = document.querySelector('#txt-input')
var btnSelector = document.querySelector('#btn-translate')
var outputDiv = document.querySelector('#output')


/*var serverURL = 'https://api.funtranslations.com/translate/minion.json'




function clickhandler(){
    console.log('clicked!!!')
    console.log(inputText.value)

    
    }












    btnSelector.addEventListener('click' , clickhandler)*/
    var inputText = document.querySelector('#txt-input')
var btnSelector = document.querySelector('#btn-translate')
var outputDiv = document.querySelector('#output')

    var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputUser = inputTexT.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputUser))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnSelector.addEventListener("click", clickHandler)


    
    
