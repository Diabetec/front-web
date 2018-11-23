$( document ).ready(function() {

	// SUBMIT FORM
    $("#signup-form").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});


    function ajaxPost(){
      console.log("entró");

    	// PREPARE FORM DATA
    	var formData = {
    		email : $("#email").val(),
    		password :  $("#password").val(),
        name :  $("#name").val(),
        age :  $("#age").val(),
        heigh :  $("#heigh").val()
        weight : $("#weight").val(),
    	}

    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "http://localhost:3000/user/signup",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(customer) {
				$("#postResultDiv").html("<p>" +
					"Post Successfully! <br>" +
					"--->" + JSON.stringify(customer)+ "</p>");
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});

    	// Reset FormData after Posting
    	resetData();

    }

    function resetData(){
    	$("#email").val("");
    	$("#password").val("");
      $("#name").val("");
      $("#age").val("");
      $("#reg_password_confirm").val("");
      $("#heigh").val("");
      $("#weight").val("");
    }
})
