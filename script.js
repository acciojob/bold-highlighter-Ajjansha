function highlight() {
    //Write your code here
const boldWords = document.querySelectorAll('strong'); // Loop through each and change color to green boldWords.forEach(word => { word.style.color = "rgb(0, 128, 0)"; });

}


function return_normal() {
    //Write your code here
const boldWords = document.querySelectorAll('strong'); // Loop through each and revert color back to black boldWords.forEach(word => { word.style.color = "rgb(0, 0, 0)"; });
    
}
