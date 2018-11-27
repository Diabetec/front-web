myStorage = window.localStorage;
var yeison;
var id;
var token;
$( document ).ready(function() {


  // SUBMIT FORM
  $("#login-form").submit(function(event) {
    // Prevent the form from submitting via the browser.
    event.preventDefault();
    ajaxPost();
  });

  function ajaxPost(yeison){
    console.log("entró");

    // PREPARE FORM DATA
    var formData = {
      email : $("#email").val(),
      password :  $("#password").val(),
    }

    // DO POST
    $.ajax({
      type : "POST",
      contentType : "application/json",
      url : "http://localhost:3000/user/login",
      data : JSON.stringify(formData),
      dataType : 'json',
      success : function(customer) {
        $("#postResultDiv").html("<p>" +
        "Post Successfully! <br>" +
        "--->" + JSON.stringify(customer)+ "</p>");
        yeison = JSON.stringify(customer);
        check_login_and_save(yeison);

      },
      error : function(e) {
        alert("Usuario o contraseña incorrecta!")
        $("#postResultDiv_error").html("<p>" +
        "Usuario o contraseña incorrecta" + "</p>");
        console.log("ERROR: ", e);
      }

    }).done(function(){


      console.log(yeison);

    });



    // Reset FormData after Posting
    resetData();

    // window.location.href = "../src/login.html";
  }

  function resetData(){
    $("#email").val("");
    $("#password").val("");
  }

  function check_login_and_save(yeison){
    var n_id = yeison.search("_id") + 6;
    var n_token = yeison.search("token") + 8;
    var id = yeison.substr(n_id, (n_id + 16));
    var token = yeison.substr(n_token, 149);
    console.log(id);
    console.log(token);
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    window.location.href = "../src/home.html";

  }

})
var local_token = localStorage.getItem('token');
console.log(local_token);

console.log(id);
