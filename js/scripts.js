$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").show();
    $("input:checkbox[name=work]:checked").each(function(){
      var workTranspo = $(this).val();
      $("p#work").after(workTranspo + "<br>"); 
    });
    $("input:checkbox[name=fun]:checked").each(function(){
      var funTranspo = $(this).val();
      $("p#fun").after(funTranspo + "<br>"); 
    });
    $("form").hide();
  });
});