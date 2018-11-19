$(document).ready(function(){
	
	$("nav li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>')
							.before('<li><a href="#">link 3.5</a></li>');
	$("nav li:nth-child(6)").prepend(' 😎 ')
							.after('🙂');
});
