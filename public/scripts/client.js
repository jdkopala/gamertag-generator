$(document).ready(() => {
  let results = 5;
  let gamertags = generateGamertags(results);
  createGamertagElements(gamertags);

  let radio = $('input[type="radio"]').on('click', (e) => {
    let radioValue = $(e.target).siblings('label').text();
    results = radioValue;
  })

  console.log(radio);

  $('#generate').on('click', function() {
    gamertags = generateGamertags(results);
    createGamertagElements(gamertags);
  });



});
