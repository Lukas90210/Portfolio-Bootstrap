function readFile() { 
    //date
    $('#year').text(new Date().getFullYear());

    //
    $('.port-item').click(function () {
      $('.collapse').collapse('hide');
    });

    //wyświetlanie zdjęć po kliknięciu, sekcja work
    $(document).on('click', '[data-toggle="lightbox"]', function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
  }
  
 