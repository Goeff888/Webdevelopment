$("ul").on("click", "li",  function(){
    $(this).toggleClass("completed"); 
});

$("ul").on("click", "span", function(evt){
   $(this).parent().fadeOut(500, function(){
    $(this).remove();
   });

   evt.stopPropagation();
});

$("input[type='text']").keypress(function(evt){
   if (evt.which === 13){
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><i class='fa fa-eraser'></i> "+ todotext +"<span class='spanlock'><i class='fa fa-lock'></i></span></li>");
   } 
});
