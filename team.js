$(document).ready( function() {
	$("#leaderCharacter").click(function(){
		$('#petSelector').modal('show', $('#leaderCharacter'));
	});
	$("#leaderSubCharacter").click(function(){
		$('#petSelector').modal('show', $('#leaderSubCharacter'));
	});
	$("#memberCharacter1").click(function(){
		$('#petSelector').modal('show', $('#memberCharacter1'));
	});
	$("#memberSubCharacter1").click(function(){
		$('#petSelector').modal('show', $('#memberSubCharacter1'));
	});
	$("#memberCharacter2").click(function(){
		$('#petSelector').modal('show', $('#memberCharacter2'));
	});
	$("#memberSubCharacter2").click(function(){
		$('#petSelector').modal('show', $('#memberSubCharacter2'));
	});
	$("#memberCharacter3").click(function(){
		$('#petSelector').modal('show', $('#memberCharacter3'));
	});
	$("#memberSubCharacter3").click(function(){
		$('#petSelector').modal('show', $('#memberSubCharacter3'));
	});
	$("#memberCharacter4").click(function(){
		$('#petSelector').modal('show', $('#memberCharacter4'));
	});
	$("#memberSubCharacter4").click(function(){
		$('#petSelector').modal('show', $('#memberSubCharacter4'));
	});
	$("#friendCharacter").click(function(){
		$('#petSelector').modal('show', $('#friendCharacter'));
	});
	$("#friendSubCharacter").click(function(){
		$('#petSelector').modal('show', $('#friendSubCharacter'));
	});

	$('#petSelector').on('show.bs.modal', function (event) {

		var related_target = $(event.relatedTarget);

		var modal = $(this);
		modal.find('#petSelectorInput').val("");
		modal.find('#whichMember').val(related_target.attr('id'));

	})
	$('#petSelectorSubmitBtn').click(function(){
		var pet_id = document.getElementById('petSelectorInput').value;
		var member_id = document.getElementById('whichMember').value;
		var img_elem = document.createElement("img");
		img_elem.src = 'https://gamewith.akamaized.net/article_tools/pad/gacha/' + pet_id + '.png';
		img_elem.setAttribute('height', '100%');
		img_elem.setAttribute('width', '100%');
		console.log(member_id);
		document.getElementById(member_id).innerHTML = '';
		document.getElementById(member_id).appendChild(img_elem);

		$('#petSelector').modal('hide');
	})
	
});