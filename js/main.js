
var $photoModalOne = $('#photo-modal-1');
var $photoModalTwo = $('#photo-modal-2');
var $photoModalThree = $('#photo-modal-3');
var $photoModalFour = $('#photo-modal-4');
var $photoModalFive = $('#photo-modal-5');
var $photoModalSix = $('#photo-modal-6');
var $photoModalSeven = $('#photo-modal-7');
var $photoModalEight = $('#photo-modal-8');
var $photoModalNine = $('#photo-modal-9');

var $thumbnailOne = $('#thumbnail-1');
var $thumbnailTwo = $('#thumbnail-2');
var $thumbnailThree = $('#thumbnail-3');
var $thumbnailFour = $('#thumbnail-4');
var $thumbnailFive = $('#thumbnail-5');
var $thumbnailSix = $('#thumbnail-6');
var $thumbnailSeven = $('#thumbnail-7');
var $thumbnailEight = $('#thumbnail-8');
var $thumbnailNine = $('#thumbnail-9');

var $modalAvatarOne = $('#modal-avatar-1');
var $modalAvatarTwo = $('#modal-avatar-2');
var $modalAvatarThree = $('#modal-avatar-3');
var $modalAvatarFour = $('#modal-avatar-4');
var $modalAvatarFive = $('#modal-avatar-5');
var $modalAvatarSix = $('#modal-avatar-6');
var $modalAvatarSeven = $('#modal-avatar-7');
var $modalAvatarEight = $('#modal-avatar-8');
var $modalAvatarNine = $('#modal-avatar-9');


function showOne() {
	$photoModalOne.attr('src', 'img/images/photo1.jpg');
	$modalAvatarOne.attr('src', 'img/avatars-modal/modal-avatar2.jpg');	
}

function showTwo() {
	$photoModalTwo.attr('src', 'img/images/photo2.jpg');
	$modalAvatarTwo.attr('src', 'img/avatars-modal/modal-avatar3.jpg');		
}

function showThree() {
	$photoModalThree.attr('src', 'img/images/photo3.jpg');
	$modalAvatarThree.attr('src', 'img/avatars-modal/modal-avatar2.jpg');		
}

function showFour() {
	$photoModalFour.attr('src', 'img/images/photo4.jpg');	
	$modalAvatarFour.attr('src', 'img/avatars-modal/modal-avatar5.jpg');	
}

function showFive() {
	$photoModalFive.attr('src', 'img/images/photo5.jpg');
	$modalAvatarFive.attr('src', 'img/avatars-modal/modal-avatar6.jpg');		
}

function showSix() {
	$photoModalSix.attr('src', 'img/images/photo6.jpg');
	$modalAvatarSix.attr('src', 'img/avatars-modal/modal-avatar7.jpg');		
}

function showSeven() {
	$photoModalSeven.attr('src', 'img/images/photo7.jpg');	
	$modalAvatarSeven.attr('src', 'img/avatars-modal/modal-avatar3.jpg');	
}

function showEight() {
	$photoModalEight.attr('src', 'img/images/photo8.jpg');
	$modalAvatarEight.attr('src', 'img/avatars-modal/modal-avatar7.jpg');		
}

function showNine() {
	$photoModalNine.attr('src', 'img/images/photo9.jpg');	
	$modalAvatarNine.attr('src', 'img/avatars-modal/modal-avatar2.jpg');	
}

$thumbnailOne.click(showOne);
$thumbnailTwo.click(showTwo);
$thumbnailThree.click(showThree);
$thumbnailFour.click(showFour);
$thumbnailFive.click(showFive);
$thumbnailSix.click(showSix);
$thumbnailSeven.click(showSeven);
$thumbnailEight.click(showEight);
$thumbnailNine.click(showNine);


