$(function(){
	$.ajax({
		url: 'https://rickandmortyapi.com/api/character/',
		success: function(data){
			addCard(cardMixer(data.results, 6));
		},
		error: function(request, status, error) {
	        alert("Error al recolectar los datos.");
	        console.log(request.status);
	        console.log(request.responseText);	        
	    }
	});
});

function cardMixer(data, cap){
	let randomArray = data.sort(function() {return Math.random() - 0.5});
	randomArray.length = cap;

	return randomArray;
}


function addCard(data){
	data.forEach( function(element, index) {
		let output;
		let status = (element.status == "") ? "Unknown" : element.status;
		let species = (element.species == "") ? "Unknown" : element.species;
		let type = (element.type == "") ? "Unknown" : element.type;
		let gender = (element.gender == "") ? "Unknown" : element.gender;

		if(index % 3 == 0){
			output = "<div class='card-deck'></div>";

			$(".card-holder").append(output);
		}

		if(index >= data.length - 3)
			output = "<div class='col-sm pt-5 pb-5'>";
		else
			output = "<div class='col-sm pt-5'>";		

		output += 					
					"<div class='card'>" +
					  "<img class='card-img-top' src='" + element.image + "' alt=''>" + 
					  "<div class='card-body'>" + 
					  	"<h4 class='card-title'>" + element.name + "</h4>" +
					    "<div class='card-text'>" +
					    	"<div class='identification'>" +
								"<p class='name'>ID</p>" +
								"<p class='value'>" + element.id + "</p>" +
					    	"</div>" +
					    "</div>" +
					    "<div class='information'>" +
							"<div class='status'>" +
								"<p class='name'>STATUS</p>" +
								"<p class='value'>" + status + "</p>" +
							"</div>" +
							"<div class='species'>" +
								"<p class='name'>SPECIES</p>" +
								"<p class='value'>" + species + "</p>" +
							"</div>" +
							"<div class='type'>" +
								"<p class='name'>TYPE</p>" +
								"<p class='value'>" + type + "</p>" +
							"</div>" +
							"<div class='gender'>" +
								"<p class='name'>GENDER</p>" +
								"<p class='value'>" + gender + "</p>" +
							"</div>" +
					    "</div>" +
					  "</div>" +
					"</div>" +
				"</div>"; 

		$(".card-deck").last().append(output);
	});	
}
