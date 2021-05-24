// ========================== BURGEUR MENU ==========================
$(function () {
  //when you clise menu
  $('.closebtn').click(function () {
    $('.overlay').css('width', '0');
  });

  //when you open menu
  $('.burger-button').click(function () {
    $('.overlay').css('width', '100%');
  });
});



// ==========================  MODAL ==========================
$(function () {

  //when gallery image is clicked 
  $('.gallery-grid-item img').click(function () {
    $('.gallery-modal').css('display', 'block');
    var source = $(this).attr("src");
    var alter = $(this).attr("alt");
    $('#captionShow').text(alter);
    $('#imgShow').attr({
      src: source,
      alt: alter
    });
  });

  //when close button of gallery image is clicked
  $('.modal-close').click(function () {
    $('.gallery-modal').css('display', 'none');
  })
});




