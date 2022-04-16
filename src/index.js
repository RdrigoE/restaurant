import loadMainPage from "./landingPage";
import loadMenuPage from "./menuPage"
import loadContactPage from "./contactPage"
import './style.css'


function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

loadMainPage();

document.getElementById("home").addEventListener("click",()=>{
    removeAllChildNodes(document.getElementById("content"))
    loadMainPage()
})

document.getElementById("menu").addEventListener("click",()=>{
    removeAllChildNodes(document.getElementById("content"))
    loadMenuPage()
})

document.getElementById("contact").addEventListener("click",()=>{
    removeAllChildNodes(document.getElementById("content"))
    loadContactPage()
})