document.querySelector("#show-login").addEventListener("click",function(){
	document.querySelector(".popup").classlist.add(".active");
}); 

document.querySelector(".popup .close-btn").addEventListener("click",function(){
	document.querySelector(".popup").classlist.remove(".active");
});  