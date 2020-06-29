const projects = document.querySelector('.default-twelve');
const moreProjects = [
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
	'imgs/Step Project Ham - images/graphic design/graphic-design1.jpg',
];
let loadMoreStatus = 0;
function loadMore() {
	let itemsStr = '';
	for(let i = loadMoreStatus; i < moreProjects; i++) {
		itemsStr += ` <img class="img-class" src="${moreProjects[i]}">`
	}
	projects.append(itemsStr);
}   