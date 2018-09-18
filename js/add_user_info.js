$(document).ready(function(){
	$.ajax({
		url		: './data/profileData.json',
		type	: 'GET',
		dataType: 'json',
		success: function(data){
			let newHtml = "";
			newHtml += `${data.name.firstName} ${data.name.lastName}`;
			$(".panel-title").append(newHtml);
			newHtml = "";
			newHtml += `<tbody>
						<tr>
							<td> Username:</td> 
							<td> ${data.username} </td>
						</tr>
						<tr>
							<td> Email:</td> 
							<td> ${data.email} </td>
						</tr>
						<tr>
							<td> Gender:</td> 
							<td> ${data.gender} </td>
						</tr>
						<tr>
							<td> Country:</td> 
							<td> ${data.country} </td>
						</tr>
						</tbody>`;
			$(".table").append(newHtml);
		} 
	});
});