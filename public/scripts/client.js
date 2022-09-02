$(document).ready(() => {

  let results = 5;
  let gamertags = generateGamertags(results);
  createGamertagElements(gamertags);

  $('input[type="radio"]').on('click', (e) => {
    let radioValue = $(e.target).siblings('label').text();
    results = radioValue;
  })

  $('#generate').on('click', function() {
    gamertags = generateGamertags(results);
    createGamertagElements(gamertags);
  });



});
