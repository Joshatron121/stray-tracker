$(function(){
	var MOCK_ANIMAL_DATA = {
		trackingData: [
			{ id: 0, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: '900 block of '	}, features: {	type: 'Dog', color: 'Black', injured: 'yes', size: 'medium', sex: 'male'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'at finders home', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 1, name: 'Bailey', location: { zip: 63031, streetName: 'Bellarmine Ln.', block: '400 block of '	}, features: {	type: 'Dog', color: 'White', injured: 'unknown', size: 'small', sex: 'unknown'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'taken to vet', microchip: 'found and scanned',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 2, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: '500 block of '	}, features: {	type: 'Cat', color: 'Black', injured: 'no', size: 'large', sex: 'female'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'taken to vet', microchip: 'found and scanned',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 3, name: 'Blake', location: { zip: 63031, streetName: 'Bellarmine Ln.', block: '800 block of '	}, features: {	type: 'Dog', color: 'Brown', injured: 'unknown', size: 'medium', sex: 'male'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'still missing', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 4, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: false	}, features: {	type: 'Dog', color: 'Black', injured: 'unknown', size: 'small', sex: 'unknown'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'spotted', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 5, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: false	}, features: {	type: 'Cat', color: 'Blonde', injured: 'unknown', size: 'medium', sex: 'unknown'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'spotted', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 6, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: false	}, features: {	type: 'Cat', color: 'Black', injured: 'unknown', size: 'large', sex: 'male'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'at finders home', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 7, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: false	}, features: {	type: 'Dog', color: 'Grey', injured: 'yes', size: 'medium', sex: 'female'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'reuinted', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 8, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: false	}, features: {	type: 'Cat', color: false, injured: 'no', size: 'medium', sex: 'male'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'taken to shelter', microchip: 'none', picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] }, { id: 9, name: false, location: { zip: 63031, streetName: 'Bellarmine Ln.', block: false	}, features: {	type: 'Cat', color: 'White', injured: 'yes', size: 'medium', sex: 'unknown'	}, otherNotes: 'Attempted to contact dog, but she ran as I got close', status: 'at finders home', microchip: 'unknown',	picture: false, sightedLocations: ['bellarmine', 'fifth and 23rd', 'blue street'] } 
		]
	}

	var MOCK_COMMENT_DATA = {
		commentData: [
			{ postId: 0, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 2, postedBy: false, comment: 'This is a comment.'	}, { postId: 1, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 5, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 6, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 1, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 1, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 1, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 0, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 7, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 8, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 9, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 5, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 9, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 1, postedBy: 'Joy', comment: 'This is a comment.'	}, { postId: 0, postedBy: 'Joy', comment: 'This is a comment.'	}
		]
	}
	console.log(MOCK_ANIMAL_DATA.trackingData)

	function buildTemplate(data) {
		var title = (data.name || (data.features.color || '') + ' ' + data.features.type);
		var features = ((data.features.color && data.features.color + ' ') || '') + data.features.type.toLowerCase() + ' sighting. Last seen near ' + ((data.location.block && 'the ' + data.location.block ) || '') + (data.location.streetName) + ' ' + (data.location.zip)
		return '<div class="result-' + data.id + '">' +
				'<div class="col s12 m4 l4">' +
					'<a href="#animal-detail" class="modal-close"><div class="card hoverable">' +
						'<div class="hide-on-small-only card-image">' +
							'<img src="/images/dogPic.jpg">' +
						'</div>' +
						'<div class="result-1 card-content">' +
							'<span class="card-title animal-information black-text">' + title.toUpperCase() + '</span><div class="divider"></div>' +
							'<p class="last-location flow-text black-text">' + features +'</p>' +
							'<div class="divider"></div><p class="black-text">Click for More</p>' +
						'</div></div></a></div></div>'
	}

	function getAnimalData(callbackFn) {
		setTimeout(function(){ callbackFn(MOCK_ANIMAL_DATA)}, 100)
	}

	function addOrAppendResults(path, data) {
		if(path) {
			$('.results-field').append(data + '</div>')
		} else {
			var resultTemplate = buildTemplate(data)
			return resultTemplate
		}
	}

	function buildPagination(dataLength, currentPage){
		totalPages = Math.ceil(dataLength / 9)
		paginationUl = '<div class="row"><div class="col s12 center"><ul class="pagination">'
		if(currentPage === 1) {
			paginationUl += '<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>'
		} else {
			paginationUl += '<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>'
		}
		for(var page = 1; page <= totalPages; page++) {
			if(page === currentPage) {
				paginationUl += '<li class="active"><a href="#!">' + page + '</a></li>'
			} else {
				paginationUl += '<li class="waves-effect"><a href="#!">' + page + '</a></li>'
			}
		}
		if(currentPage === totalPages) {
			paginationUl += '<li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li></ul></div></div>'
		} else {
			paginationUl += '<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li></ul></div></div>'
		}
		
		$('.pagination-field').append(paginationUl)
	}

	function displayAnimalData(data) {
		var i = 0
		var results = '<div class="row">'
		var currentPage = 1;
		for (var index = 0; index < 6; index++){
			console.log(i, index)
			var animal = data.trackingData[index]
			if(i === 3) {
				addOrAppendResults(true, results)
				i = 0
				results = '<div class="row">'
				results += addOrAppendResults(false, animal)
				i++
			} else {
				i++
				results += addOrAppendResults(false, animal)
			}
		}
		addOrAppendResults(true, results)
		buildPagination(data.trackingData.length, currentPage)
	}

	function getAndDisplayAnimalData() {
		getAnimalData(displayAnimalData)
	}
	
	getAndDisplayAnimalData()

	$('.toggle-filters').click(function(){
		if($('.toggle-filters > i').text() === 'keyboard_arrow_up'){
			$('.filters-field').slideToggle(600);
			$('.search-field > .card-panel').animate({height: "100px"}, 600);
			$('.toggle-filters > i').text('keyboard_arrow_down')
		} else {
			$('.filters-field').slideToggle(600);
			$('.search-field > .card-panel').animate({height: "215px"}, 600);
			$('.toggle-filters > i').text('keyboard_arrow_up')
		}
	})

	$('select').material_select();
	$('.modal').modal()
	$('.materialboxed').materialbox();

})