var user_id = localStorage.getItem('id');
var user_token = localStorage.getItem('token');

$( document ).ready(function() {
	ajaxGet();

	// GET REQUEST
	$("#allCustomers").click(function(event){
		event.preventDefault();
		ajaxGet();
	});

	console.log(user_id);
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "http://localhost:3000/user/" + user_id,
			beforeSend: function (xhr) {
		    xhr.setRequestHeader('Authorization', 'Bearer ' + user_token);
			},
			success: function(result){
				console.log("before");
				$('#getResultDiv ul').empty();
				var custList = "";
				$.each(result, function(i, customer.foods){
					$('#getResultDiv .list-group').append(customer.foods.label + "<br> Calorías: " + customer.foods.calories "<br> Carboidratos: " + customer.foods.carbs )
				});
				// console.log("food" + result.foods);
				// document.getElementById('user_name').innerHTML = result.name;
				// document.getElementById('user_email').innerHTML = result.email;
				// document.getElementById('user_email2').innerHTML = result.email;
				// document.getElementById('user_weight').innerHTML = result.weight;
				// document.getElementById('user_height').innerHTML = result.heigh;
				// document.getElementById('user_age').innerHTML = result.age;

				console.log("Success: ", result);
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});
	}
})
