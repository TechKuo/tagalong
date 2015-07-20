$(document).ready(function(){

	var baseUrl = "http://localhost:4567";
	
	// Handle Login
	$('#sign-in').click(function(){
	
		var attuid = $('#attuid').val();
		var password = $('#password').val();
	
		var data = {
				attuid: attuid,
				password: password
		};
	
		var url = baseUrl + '/login';
	
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			dataType: 'text',
			success: function(result, status, xhr) {
				$('#result-msg').text('Success!');
				$('#result-msg').css('color','green');
			},
			error: function(result, status, xhr) {
				$('#result-msg').text('Incorrect ATTUID or password.');
				$('#result-msg').css('color','red');
			
			}
		});
	});

	// Handle sign up
	
	$('#sign-up').click(function(){
	
		var userName = $('#userName').val();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var password = $('#password').val();
		var departmentId = $('#departmentId').val();
		var locationId = $('#locationId').val();
		
		var data = {
				userName: userName,
				firstName: firstName,
				lastName: lastName,
				password: password,
				departmentId: departmentId,
				locationId: locationId
		};
	
		var url = baseUrl + '/signup';
	
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			dataType: 'text',
		});
	});



});