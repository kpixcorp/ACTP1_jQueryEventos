$(document).ready(function(){

	$('.social__btn').on('click', function (e){
		e.preventDefault();
			})

	$('.social__like').on('click', function() {
		$(this).toggleClass('social__like--clicked');
	})


	$('.social__link').on('click', function(){
		alert($(this)
					 .parent()
					 .parent()
					 .parent()
					 .children('img')
					 .attr('alt')
					);
	})
});