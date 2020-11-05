$(document).ready(function(){
   var request = new XMLHttpRequest()
   request.open('get', 'https://api.github.com/users/ryanstedmanw/repos' , true)
   request.onload = function(){
       var data = JSON.parse(this.response);
       var statusHTML = '';
       $.each(data, function(i, status){
           statusHTML += '<tr>';
           statusHTML += '<td>' + status.id + '</td>'
           statusHTML += '<td>' + status.name + '</td>'
           statusHTML += '<td>' + status.html_url + '</td>'
           statusHTML += '<td>' + status.language + '</td>'
           statusHTML += '</tr>';
           });
           $('tbody').html(statusHTML);
   }
request.send();
});