$(function() {

	let filter = $("[data-filter]"); 
	/*сохраняем ссылки*/

	filter.on("click", function(event) {
	 /*при клике на ссылку отменяем # и*/
		event.preventDefault();

		let cat = $(this).data('filter'); 
		/*и сохраняем в переменную cat значение 
		атрибута data-filter*/

		if(cat == 'all') { /*сравниваем с all
			если совпадает, убираем hide*/
			$("[data-cat]").removeClass("hide");
		} else {/*иначе сравниваем значение каждого
			и показываем*/
			$("[data-cat]").each(function(){

				let workcat = $(this).data('cat');

				if(workcat != cat) {
				$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
					
				}
			});
		}
	});
});

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 600 ) {
        $('.header').addClass('scrolled');
        $('.header__link').addClass('color__scroll')
        $('.header__logo').addClass('color__scroll')
        $('.header__burger').addClass('background')
        $('.burger__span').addClass('background')
        $('.header__menu').addClass('transpaurent-white')
    }   
    if( scrolled <= 600 ) {     
        $('.header').removeClass('scrolled');
        $('.header__link').removeClass('color__scroll')
        $('.header__logo').removeClass('color__scroll')
        $('.header__burger').removeClass('background')
        $('.burger__span').removeClass('background')
        $('.header__menu').removeClass('transpaurent-white')
    } 
});
