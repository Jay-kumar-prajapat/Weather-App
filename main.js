const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer =document.querySelector(".weather-container");
const grantLocationContainer = document.querySelector(".grant-location-container");
const formContainer = document.querySelector("[data-searchForm]");
const loadingScreen =  document.querySelector(".loading-container");
const userWeather = document.querySelector(".user-info-container");


let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");

getfromSessionStorage();

function switchTab(newTab){
    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab = newTab
        oldTab.classList.add("current-tab")
    }
    else{
        
    }
}



