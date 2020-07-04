// Lo slider prevederà due frecce (icone) che permettono di mostrare le immagini, arrivati all’ultima o prima immagine dobbiamo ripartire dal lato opposto.
// Inoltre per scorrere le immagini utilizziamo anche le frecce sinistra e destra della tastiera.

// eseguo il codice JS al caricamento della pagina
$(document).ready(function() {
  var nextButton = $('.next');
  var prevButton = $('.prev');
  var navButton = $('.nav i');

  nextButton.click(nextImg);
  prevButton.click(prevImg);
  navButton.click(dotNav);
  // l'evento keydown intercetta il codice di tutti i tasti della tastiera
  $(document).keydown(keyPrevNext);
});

// FUNCTIONS
function nextImg() {
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
}
function prevImg() {
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
}
function dotNav() {
  var dot = $('.nav i');
  var img = $('.slider-wrapper img');
  var position = $(this).index();

  dot.removeClass('active');
  $(this).addClass('active');
  img.removeClass('active');
  $(img.get(position)).addClass('active');
}
function keyPrevNext() {
  //keyCode e which per supporto cross browser
  var keyWhich = event.which;
  var keyCode = event.keyCode;
  console.log(event.which);
  console.log(event.keyCode);
  if (keyWhich == 39 || keyCode == 39) {
    nextImg();
  } else if (keyWhich == 37 || keyCode == 37) {
    prevImg();
  }
}
