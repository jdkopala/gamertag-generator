

$(document).ready(() => {
  
})

const $generateButton = $('.btn btn-primary');

$($generateButton).on('mouseover', () => {
  $($generateButton).css('cursor', 'pointer');
});

$($generateButton).on('click', () => {
  console.log("CLICK.")
  let gamertags = generateGamertags(10);
  for (let g of gamertags) {
    console.log(g);
    $('gamertag-table-body').append(`
    <tr>
      <th scope="row">${gamertags.indexOf(g) + 1}</th>
      <td>${g}</td>
    </tr>`)
  }
});