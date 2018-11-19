$(document).ready(function(){

	var sel = $('.article').eq(3)
			.children('.article__body')
			.children('.article__socialnetworks')
			.children()
			.eq(3)
			.children()
			.attr('href', 'http://pinterest.com')
			.text('Pinterest');


	$('a[href="#"]').on('click', function (e){
		e.preventDefault();
	});

	$('.header__main').find('h2')
					  .css('font-size', '3em');
});


/* Traversing:
		En relación al elemento al que se le hace click, se obtiene un resultado
		que no afecta a otros elementos similares.
		
		Está basado en 0 el número de la búsqueda

		1. Método:
			var sel = $('.article nth:')


		2. Método:
			var sel = ('article').eq(3)
					.children('.article_body')
					.children('.article_socialnetworks')
					.children()
					.eq(3)
					.children('a')<- medio redundante, usar si van a haber más elementos.
					.attr('href', 'http://pinterest.com')
					.text('Pinterest')


	 	3. Método:
			var sel = ('article').eq(3)
					.find('.article_body .article_socialnetworks li:nth-child(4) a')



		$('a[href="#"]').on('click', ev...)


		$('.header__main').find('h2').css('font-size', '3em')
		$('.header__main').children('h2').css('font-size', '3em')
		$('.header__main > h2').css('font-size', '3em')

Usar comillas simples para trabajar JS. Y usar las dobles para citar texto or... else.
*/
