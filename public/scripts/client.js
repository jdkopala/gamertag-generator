$(document).ready(() => {
  
  const $generateButton = $('#generate');
  
  $($generateButton).on('click', function() {
    let gamertags = generateGamertags(10);
    createGamertagElements(gamertags);
  })

});
