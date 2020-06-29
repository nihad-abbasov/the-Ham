let tabs = document.querySelector('.parent-tab');

let tabsContent = document.querySelector('.contents');

console.log(tabs);
console.log(tabsContent)
tabs.onclick = (event) => {
	tabs.querySelector(".active").classList.toggle("active");
	event.target.classList.toggle("active");

	for (let i = 0; i < tabsContent.children.length; i++) {
		tabsContent.children[i].hidden = true;
	}

	for (let i = 0; i < tabsContent.children.length; i++) {
	
		if(tabsContent.children[i].dataset.tab == event.target.dataset.tab){
			tabsContent.children[i].hidden = false;
		}
	}

	// if(tabs.children[i].dataset.tab == tabsContent.children[i].tab) {
	// 	tabsContent.children[i].hidden = false;
	// }
	

    // tabsContent.querySelector("img:not([hidden])").hidden = true;
    // console.log(event.target)
	// tabsContent.children[event.target.dataset.index].hidden = false;
}
 

// for (let i = 0; i < tabsContent.children.length; i++){
// 	tabs.children[i].dataset.index = i;
// 	if(i)
//     tabsContent.children[i].hidden = true;
// }





