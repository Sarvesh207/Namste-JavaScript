const upperDiv = document.querySelector(".main")
console.log(upperDiv)
upperDiv.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {

        console.log("button clicked")
    }

    console.log(e.target.tagName)

})







// document.querySelector(".grandParent").addEventListener("click", (e) => {
//     console.log("GrandParent clicked")
//      e.stopPropagation();
// },true)

// document.querySelector(".parent").addEventListener("click", (e) => {
//     console.log("Parent clicked")
   
// },true)

// document.querySelector(".child").addEventListener("click", (e) => {
//     console.log("Child clicked")
// },true)