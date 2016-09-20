
var $photoModalOne = $('#photo-modal-1');
var $thumbnailOne = $('#thumbnail-one');


function showOne() {
	$photoModalOne.attr('src', 'img/images/photo1.jpg');
}

$thumbnailOne.click(showOne);