$(document).ready(function(){
	$('#add-comments-button').click(function(){
		var comment = $('#comment').val();
		var commentSection = $('#comment-section').html();
		var randomNumber1 = Math.floor((Math.random() * 100) + 1);
		var randomNumber2 = Math.floor((Math.random() * 100) + 1);
		var randomNumber3 = Math.floor((Math.random() * 100) + 1);
		var user = "";
		$.ajax({
			url		: './data/profileData.json',
			type	: 'GET',
			dataType: 'json',
			async 	: false,	 	
			success: function(data){
				user = data.name.firstName + " " + data.name.lastName;
			} 
		});

		if (comment != ""){
			commentSection =	`<div class="row"><article class="col-xs-12"> <p><h4> ${user} </h4></p> <p> ${comment} </p></article></div>
								<ul class="list-inline">
									<li><a href="#"><span class="glyphicon glyphicon-thumbs-up"></span> ${randomNumber1} Likes </a></li>
									<li><a href="#"><span class="glyphicon glyphicon-thumbs-down"></span> ${randomNumber2} Dislikes </a></li>
									<li><a href="#"><span class="glyphicon glyphicon-share"></span> ${randomNumber3} Shares </a></li>
								</ul><hr>`;

			$('#comment-section').prepend(commentSection);
			$('#comment').val("");
		}
	});

	$.ajax({
		url		: './data/comments.xml',
		type	: 'GET',
		dataType: 'xml',
		success	: function(data){
			let newHTML = '';
			var randomNumber4 = Math.floor((Math.random() * 100) + 1);

			$(data).find('contact').each(function(){
				var user = $(data).text();
				newHTML +=	`<div class="row"><article class="col-xs-12"> <p><h4> ${$(this).find('name').text()} </h4></p> <p> ${$(this).find('text').text()} </p></article></div>
							<ul class="list-inline">
								<li><a href="#"><span class="glyphicon glyphicon-thumbs-up"></span> ${randomNumber4} Likes </a></li>
								<li><a href="#"><span class="glyphicon glyphicon-thumbs-down"></span> ${randomNumber4} Dislikes </a></li>
								<li><a href="#"><span class="glyphicon glyphicon-share"></span> ${randomNumber4} Shares </a></li>
							</ul><hr>`;
			});
			$('#comment-section').append(newHTML);
		}
	});
});