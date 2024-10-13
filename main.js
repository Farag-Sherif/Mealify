
// if media of monitor is less than 992px the functions to appears the page elements
let faBars = document.querySelector('.icons .fa-bars');

faBars.addEventListener('click',function(){
	
	let pageElement = document.querySelector('header ul');
	pageElement.style.display="flex";
	
})

let faXmark = document.querySelector('ul .fa-xmark');

faXmark.addEventListener('click',function(){
	
	let pageElement = document.querySelector('header ul');
	pageElement.style.display="none";
	
})

let wantDark= false;
let wantSun= false;
let faMoon = document.querySelector('.fa-moon');
let faSun = document.querySelector('.fa-sun');

window.addEventListener('load', () => {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        wantDark = true;
        wantSun = false;
        darkMood(); 
    } else if (savedTheme === 'sun') {
        wantSun = true;
        wantDark = false;
        sunMood(); 
    }
});

faMoon.addEventListener('click' ,function(){
    wantDark = true;
    wantSun = false;
    localStorage.setItem('theme', 'dark'); 
    darkMood();
})

faSun.addEventListener('click' ,function(){
    wantSun = true;
    wantDark = false;
    localStorage.setItem('theme', 'sun'); 
    sunMood();
})

function darkMood(){
	if(wantDark){
		let pageinDarkMood = document.body;
		pageinDarkMood.style.backgroundColor = "#202020"	
		
			// change var in css by js
		document.querySelector(':root').style.setProperty('--main-color', '#eee')
		document.querySelector(':root').style.setProperty('--third-color', '#c17e1f')
		document.querySelector(':root').style.setProperty('--fourth-color', '#d78c23')
		
		let headerinDarkMood = document.querySelector('header');
		headerinDarkMood.style.backgroundColor = "#202020"
		
		document.querySelector('header ul').style.backgroundColor = "#212529"
		document.querySelector('header ul').classList.remove("sun-mood");		
		document.querySelector('header ul').classList.add("dark-mood");	
		
			// start landing in dark mood
		let landinginDarkMood = document.querySelector('.landing');
		landinginDarkMood.style.backgroundColor = "#252525"
		
		let iElementinlandinginDarkMood = document.querySelector('.landing i');
		iElementinlandinginDarkMood.style.backgroundColor = "#202020"
			// end landing in dark mood
			
			// start gallery in dark mood
		let galleryinDarkMood = document.querySelector('.gallery');
		galleryinDarkMood.style.backgroundColor = "#252525"
			// end gallery in dark mood
			
			// start chefs in  dark mood
		let boxsChefsinDarkMood = document.querySelectorAll('.boxs .box');
		boxsChefsinDarkMood.forEach((box) => {
			box.style.backgroundColor = "#171717";
			box.style.boxShadow = "0 0 10px rgb(10 10 10)" 
			});
			
		let imegeBefore = document.querySelectorAll('.boxs .box .image');
		imegeBefore.forEach((img) => {img.classList.remove("sun-mood");
			img.classList.add("dark-mood")
			});
			// end chefs in dark mood
			
			// start contact in dark mood
		let ifoContactinDarkMood = document.querySelectorAll('.info .box');
		ifoContactinDarkMood.forEach((box) => {
			box.style.backgroundColor = "#171717";
			});
			
		let ifoTextContactinDarkMood = document.querySelectorAll('.info .box p');
		ifoTextContactinDarkMood.forEach((text) => {
			text.style.color = "#eee"; 
			});
			
		let ifoIconsContactinDarkMood = document.querySelectorAll('.info .box i');
		ifoIconsContactinDarkMood.forEach((icon) => {
			icon.style.color = "#202020"; 
			});
			
		let ifoFormContactinDarkMood = document.querySelectorAll(' form');
		ifoFormContactinDarkMood.forEach((form) => {
			form.style.backgroundColor = "#171717";
			form.style.boxShadow = "0 0 20px rgb(10 10 10)" 
			});
			
			// end concat in dark mood
			faMoon.style.display = "none";
			faSun.style.display = "inline";	
	}
}
function sunMood(){
	if(wantSun){
		
		let pageinSunMood = document.body;
		pageinSunMood.style.backgroundColor = "white"
		
			// change var in css by js
		document.querySelector(':root').style.setProperty('--main-color', '#212529')
		document.querySelector(':root').style.setProperty('--third-color', '#ce1212')
		document.querySelector(':root').style.setProperty('--fourth-color', 'hsl(0deg 84% 49%)')
		
		let headerinSunMood = document.querySelector('header');
		headerinSunMood.style.backgroundColor = "white"
		
		document.querySelector('header ul').style.backgroundColor = "white"	
		document.querySelector('header ul').classList.remove("dark-mood");		
		document.querySelector('header ul').classList.add("sun-mood");
		
			// start landing in Sun mood
		let landinginSunMood = document.querySelector('.landing');
		landinginSunMood.style.backgroundColor = "#eee"
		
		let iElementinlandinginSunMood = document.querySelector('.landing i');
		iElementinlandinginSunMood.style.backgroundColor = "white"
			// end landing in Sun mood
			
			// start gallery in Sun mood
		let galleryinSunMood = document.querySelector('.gallery');
		galleryinSunMood.style.backgroundColor = "#eee"
			// end gallery in Sun mood
			
			// start chefs in  Sun mood
		let boxsChefsinSunMood = document.querySelectorAll('.boxs .box');
		boxsChefsinSunMood.forEach((box) => {
			box.style.backgroundColor = "white";
			box.style.boxShadow = "0 0 10px #ccc" 
			});
			
		let imegeBefore = document.querySelectorAll('.boxs .box .image');
		imegeBefore.forEach((img) => {img.classList.remove("dark-mood");
			img.classList.add("sun-mood")
			});
			// end chefs in Sun mood
			
			// start contact in Sun mood
		let ifoContactinSunMood = document.querySelectorAll('.info .box');
		ifoContactinSunMood.forEach((box) => {
			box.style.backgroundColor = "#eee"; 
			});
			
		let ifoTextContactinSunMood = document.querySelectorAll('.info .box p');
		ifoTextContactinSunMood.forEach((text) => {
			text.style.color = "black"; 
			});
			
		let ifoIconsContactinSunMood = document.querySelectorAll('.info .box i');
		ifoIconsContactinSunMood.forEach((icon) => {
			icon.style.color = "white"; 
			});
			
		let ifoFormContactinSunMood = document.querySelectorAll(' form');
		ifoFormContactinSunMood.forEach((form) => {
			form.style.backgroundColor = "white";
			form.style.boxShadow = "0 0 20px #e6dddd" 
			});
			// end concat in sun mood
		faSun.style.display = "none";
		faMoon.style.display = "inline";
	}
}
// when click on item the impact on header of page 
let activeElement = document.querySelectorAll('header ul a')
activeElement.forEach((element) => (actionofActiveElement(element)))

function actionofActiveElement(active){
	
	active.addEventListener('click',function(){
		
		activeElement.forEach((active) => (active.classList.remove("active")))
		active.classList.add("active")
	})	
}
// when scroll in page the impact on header of page 
document.addEventListener('scroll', function() {
	
    let positionScrolling = window.scrollY;
	let activeElementofBody = document.body;
	let elements = Array.from(activeElementofBody.children)
	
	elements.forEach((section) => {
		
        let sectionTop = section.offsetTop - 100;
        let sectionHeight = section.offsetHeight - 100;
        let sectionBottom = sectionTop + sectionHeight;
		
        if (positionScrolling >= sectionTop && positionScrolling < sectionBottom) {
			
            activeElement.forEach((active) => active.classList.remove("active"));
			elements.forEach((active) => active.classList.remove("active"));
            section.classList.add("active");
			
		}
		if(elements[1].classList.contains('active')){
			
			let active = document.querySelector('header ul a[href="#"]')
			active.classList.add("active")
			
		}else if(elements[2].classList.contains('active')){
			
			let active = document.querySelector('header ul a[href="#Chefs"]')
			active.classList.add("active")
			
		}else if(elements[3].classList.contains('active')){
			
			let active = document.querySelector('header ul a[href="#Gallery"]')
			active.classList.add("active")
			
		}else if(elements[4].classList.contains('active')){
			
			let active = document.querySelector('header ul a[href="#Contact"]')
			active.classList.add("active")
			
		}
	})
	
})
	
	
