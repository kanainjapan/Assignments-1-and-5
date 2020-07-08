document.querySelector('.ball').addEventListener('click',
  function() {
    document.querySelector('.popup').style.display = 'flex';
});



document.querySelector('.closepopup').addEventListener('click',
  function() {
    document.querySelector('.popup').style.display = 'none';
});


window.onload = function() {
  setTimeout(function() {
    document.getElementsByClassName('.popup').style.display = 'flex';
  }, 10000);
};
