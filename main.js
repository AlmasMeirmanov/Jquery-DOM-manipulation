$(document).ready(function() {
  $("#slide").on("click", "button", function() {
    $(".content").removeClass("show")
    $(this)
      .find("+ .content")
      .addClass("show")
  })
})
