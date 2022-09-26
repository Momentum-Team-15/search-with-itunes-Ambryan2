//temperary arrays I will use to find the artist in itunes database
let desiredArt = [];
let artistInfo = [];

//this function filters through desiredArt function and then finds in another array that has matching information
function finder(array) {
    for (let j = 0; j < array.length; j++) { 
        for (let i = 0; i < newCust.length; i++) {
            if (newCust[i].name.first === array[j]) { //newCust data should be replaced with array information I would need 
                artistInfo.push(newCust[i]); //this all the info of peoples names selected
            }
        }
    }
}

//to collect input from the search bar and the search button
let form = document.querySelector("#musicForm");
let artist = document.querySelector("#artistBar");

//when search is clicked this is what results
form.addEventListener("submit", (event) => {
    event.preventDefault();
    desiredArt = artist.value;
    //need a function that will clear the results already displayed

    //need a function that will build the music results on bottom

    //also will need a function that will empty the default results on the song player

    //also will need a function that will build the song player on top

    console.log(desiredArt);
});
