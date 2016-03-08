var ypos_image, attr_image, ypos_ponyipsum, attr_ponyipsum;

function parallex() {
	// header div
	ypos_image = window.pageYOffset;
	attr_image = document.getElementById('image');
	attr_image.style.top = ypos_image * .2 + 'px';

	// pony ipsum header
	ypos_ponyipsum = window.pageYOffset;
	attr_ponyipsum = document.getElementById('ponyipsum');
	attr_ponyipsum.style.top = ypos_ponyipsum * .1 + 'px';
}

window.addEventListener('scroll', parallex);