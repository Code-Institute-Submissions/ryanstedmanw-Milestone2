$(document).ready(function() {
    var request = new XMLHttpRequest()
    request.open('get', 'https://api.github.com/users/ryanstedmanw/repos', true) /*--my link to repo*/
    request.onload = function() {
        var data = JSON.parse(this.response); /*--Save returned data as parsed json data--*/
        var statusHTML = '';
        $.each(data, function(i, status) {
            /*-- display parse data in a table--*/
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