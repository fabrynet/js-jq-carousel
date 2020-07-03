// Lo slider prevederà due frecce (icone) che permettono di mostrare le immagini, arrivati all’ultima o prima immagine dobbiamo ripartire dal lato opposto.
// Inoltre per scorrere le immagini utilizziamo anche le frecce sinistra e destra della tastiera.

// eseguo il codice JS al caricamento della pagina
$(document).ready(function() {
  nextImg();
  prevImg();
});

// FUNCTIONS
function nextImg() {
  $('.next').click(function() {
    var imgActive = $('.slider-wrapper img.active');
    var iActive = $('.slider-wrapper i.active');
    imgActive.removeClass('active');
    iActive.removeClass('active');
    imgFirst = $('.slider-wrapper img.first');
    iFirst = $('.slider-wrapper i.first');
    if (imgActive.hasClass('last')) {
      imgFirst.addClass('active');
      iFirst.addClass('active');
    } else {
      imgActive.next().addClass('active');
      iActive.next().addClass('active');
    }
  });
}
function prevImg() {
  $('.prev').click(function() {
    var imgActive = $('.slider-wrapper img.active');
    var iActive = $('.slider-wrapper i.active');
    imgActive.removeClass('active');
    iActive.removeClass('active');
    imgLast = $('.slider-wrapper img.last');
    iLast = $('.slider-wrapper i.last');
    if (imgActive.hasClass('first')) {
      imgLast.addClass('active');
      iLast.addClass('active');
    } else {
      imgActive.prev().addClass('active');
      iActive.prev().addClass('active');
    }
  });
}
