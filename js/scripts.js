$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var collins = $("input#first").val();
    $("input#first").val("");
    var arrayContent = [];
    var icecreams = arrayContent.unshift(collins);
    arrayContent.forEach(function(flavor){
      $("#ice").append("<li>" + flavor + "</li>");
          event.preventDefault();
      });
  });
});
console.log();
