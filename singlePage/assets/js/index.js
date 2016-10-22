$(document).ready(function(){
    add_menu();
});

function add_menu()
{
    $("ul#header-menu li").hover(function(){
        $(this).stop().find('ul:first').css({visibility:"visible",display:"none"}).animate({height:'toggle'},200);
    },function(){
        $('ul:first',this).css('visibility','hidden');
    });
	$(".second-lvl").parent("li").addClass("arrowdown");
	$(".second-lvl").hover(function(){
		$(this).parent("li").addClass("active");							
	}, function(){
		$(this).parent("li").removeClass("active");	
	});
			
}