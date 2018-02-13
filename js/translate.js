// Notes: 
// ne pas oublier la class "lang" sur les éléments à traduire

var arrLang = {
	"fr" : 
	{
		"home" : "Acceuil",
		"house" : "La Maison",
		"rooms" : "Les Chambres",
		"services" : "Services",
		"photos" : "Photos",
		"activities" : "Visites et activités",
		"contact" : "Contact"
	},
	"en" : 
	{
		"home" : "Home",
		"house" : "The House",
		"rooms" : "Rooms",
		"services" : "Services",
		"photos" : "Photos",
		"activities" : "Sightseeing and Activities",
		"contact" : "Contact"
	},
	"de" : 
	{
		"home" : "Empfang",
		"house" : "Das Haus",
		"rooms" : "Die Zimmer",
		"services" : "Dienstleistungen",
		"photos" : "Photos",
		"activities" : "Aktivitäten",
		"contact" : "Kontact"		
	}
};

$(function (){
	$(".languages").click(function(){
		var lang = $(this).attr("id");

		$(".lang").each(function(index, element){
			$(this).text(arrLang[lang][$(this).attr("key")]);
		});
	});
});