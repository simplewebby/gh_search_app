$(document).ready(function(){
$('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    //make request to github
    $.ajax({
        url: 'https://api.github.com/users/'+ username,
        data:{
            client_id: '88c263a9985499431636',
            client_secret: 'ce96fd40e99bd38e497e0948ac998bd7cd2b7d21'
        }
    }).done(function(user){
        $('#users').html(`
        <div class = "card"
        style="width: 18rem;"><img class = "card-img-top"
        src = "${user.avatar_url}" alt="">
            <div class="card-body">
            <h5 class="card-title">Login Name: ${user.login} </h5> 
            <h5 class = "card-text" > Name: ${user.name}</h5> 
            <p class = "card-text">Public Repos: ${user.public_repos} </p>
            <p class = "card-text">Public Gists: ${user.public_gists} </p>
            <p class = "card-text">Followers: ${user.followers} </p>
            <a href = "${user.html_url}"class = "btn btn-primary"> See Profile </a>
            </div>
            </div>
        `);
    });
});
});




document.getElementById('btn').addEventListener('click', loadPhotos);
var url = 'https://api.github.com/users';
var input = document.getElementById('btnSearch'); 
function loadPhotos(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function(){
       if(this.status == 200) {
            var users = JSON.parse(this.responseText);

          var output = '';
          for(var i in users){
              output += 
              '<div class="user">' +
              '<img src="' + users[i].avatar_url + '" width="170" height="170">' +
              '<p> Title : ' + users[i].login + '</p>' + 
              '<a href="' + users[i].html_url + '"> See Profile </a>'+
              '</div>';
          }
          document.getElementById('users').innerHTML = output;
       }
    }
     xhr.send();
     }
    

