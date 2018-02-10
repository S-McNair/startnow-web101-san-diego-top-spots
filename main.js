$(document).ready(function() {
// write your code here
  $.getJSON('data.json', function(data){

    for (i = 0; i < data.length; i++) {
      $('#myTable').append('<tr class="row"><td>' + data[i].name +'</td><td>' + data[i].description + '</td>'+
        '<td> <a class="btn" href="https://www.google.com/maps?q=' + data[i].location[0] + ',' + data[i].location[1] + '" target="blank">Google Maps</a></td></tr>');
      //$('.btn').click(function(){
        //console.log('hello');
        //window.location.href='https://www.google.com/maps?q='+data[i].location[0] + ',' + data[i].location[1];
        console.log("https://www.google.com/maps?q=" + data[i].location[0] + "," + data[i].location[1]);
      //});

    }

  });


});
