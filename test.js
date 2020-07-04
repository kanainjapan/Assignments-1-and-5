window.onload = function() {
  setTimeout(function() {
    document.getElementByClassName('.popup').style.display = 'block';
  }, 10000);
};



document.querySelector('.closepopup').addEventListener('click',
  function() {
    document.querySelector('.popup').style.display = 'none';
});
