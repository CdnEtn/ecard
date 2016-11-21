function UrlExists(url, cb){
	jQuery.ajax({
		url:	  url,
		dataType: 'text',
		type:	 'GET',
		complete:  function(xhr){
			if(typeof cb === 'function')
			   cb.apply(this, [xhr.status]);
		}
	});
}
msg = ['Not Found!', '404!', 'Bad Code!', 'Try again?', 'Invalid Code!', 'Missingno.'];
function viewitpls() {
	adr = 'cards/' + $('#code').val() + '.svg';
	UrlExists(adr, function(status) {
		if(status === 200){
			$('#warn').text("");
			console.log('Found ' + adr);
			$('#svg').attr('src', adr);
		}
		else if(status === 404){
			$('#warn').removeClass('ut');
			$('#warn').removeClass('pk');
			$('#warn').removeClass('wd');
			switch ($('#code').val().toLowerCase()) {
				case 'help':
					$('#warn').addClass('ut');
					$('#warn').text('* but nobody came.');
					break;
				case 'missingno':
				case 'missingno.':
					$('#warn').addClass('pk');
					$('#warn').text('17 error');
					break;
				case 'crystal':
				case 'vietnamese crystal':
					$('#warn').addClass('pk');
					$('#warn').text('PLAYER! DRUG BAG FUCK');
					break;
				case '17 error':
				case '* but nobody came.':
					$('#warn').addClass('ut');
					$('#warn').text('ENTRY NUMBER 17');
					break;
				case 'entry number 17':
					$('#warn').addClass('wd');
					$('#warn').text('DARK DARKER YET DARKER');
					break;
				case 'dark darker yet darker':
					$('#warn').addClass('ut');
					$('#warn').text('undefined error');
					console.warn('THE DARKNESS KEEPS GROWING');
					console.log('* BZZCT');
					console.error('TRANSMISSION ERROR');
					break;
				default:
					$('#warn').text(msg[Math.floor(Math.random()*msg.length)]);
					break;
			}
		}
	})
}
