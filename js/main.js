
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


function showOne() {
	$photoModalOne.attr('src', 'img/images/photo1.jpg');	
}

function showTwo() {
	$photoModalTwo.attr('src', 'img/images/photo2.jpg');	
}

function showThree() {
	$photoModalThree.attr('src', 'img/images/photo3.jpg');	
}

function showFour() {
	$photoModalFour.attr('src', 'img/images/photo4.jpg');	
}

function showFive() {
	$photoModalFive.attr('src', 'img/images/photo5.jpg');	
}

function showSix() {
	$photoModalSix.attr('src', 'img/images/photo6.jpg');	
}

function showSeven() {
	$photoModalSeven.attr('src', 'img/images/photo7.jpg');	
}

function showEight() {
	$photoModalEight.attr('src', 'img/images/photo8.jpg');	
}

function showNine() {
	$photoModalNine.attr('src', 'img/images/photo9.jpg');	
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


