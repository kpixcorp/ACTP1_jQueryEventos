$(document).ready(function(){

	$('.add_name').on("click", function(){
		name = prompt("Escribe tu nombre", "Elva");
		surname = prompt("Escribe tu apellido", "Sura");
		$('ul').append(
			'<li>' 
			+ '<span>'
			+ name
			+ " "
			+ surname
			+ " "
			+ '<a href="#" class=remove_name>'
			+ 'Borrar'
			+ '</a>'
			+ '</span>'
			+ '</li>')
	});

	$('.remove_name').on('click', function (e){
		e.preventDefault();
			})

	$('body').on('click', '.remove_name', function (){
		$(this).parent()
			   .parent()
			   .remove();
	})


/*
	$('.hello').on('click', function(){
		$('.remove_name').parent()
						 .parent()
						 .remove();
	})
*/

});