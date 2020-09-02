
class Movies{
	constructor(name,release_date,actor_name,producer_name) {
    this.name = name;
    this.release_date = release_date;
    this.actor_name = actor_name;
    this.producer_name = producer_name;
	}
};

var movie1 = new Movies("Harry Potter","4/11/2001","Daniel Radcliffe","David Heyman");
var movie2 = new Movies("Interstellar","26/10/2014","Matthew McConaughey","Christopher Nolan");
var movie3 = new Movies("Spiderman","1/1/2015","Andrew Garfield","ab");
var movie4 = new Movies("Captain America","2/1/2015","Chris Evan","cd");
var movie5 = new Movies("Ironman","3/1/2015","Robert Dowrney","ef");
var movie6 = new Movies("Jumanji","4/2/2016","Rock","gh");
var movie7 = new Movies("Inception","3/2/2017","Leonardo Dicaprio","ij");
var movie8 = new Movies("Fast and Furious","5/12/2017","Vin Diesel","kl");
var movie9 = new Movies("Galaxy","13/12/2016","Brad Pitt","mn");
var movie10 = new Movies("Mission Impossible","4/11/2015","Tom Cruise","op");


var myList = new Array(movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10);
console.log(myList);

document.getElementById("submit").addEventListener('click',searchMovie);

function searchMovie() {
	input = document.getElementById("name_input").value.toUpperCase();
	input1 = document.getElementById("actor_name_input").value;
	console.log(input);

	var findname = function(m_name,name) {
		var index = m_name.findIndex(function(x) {
			return x.name.toLowerCase() === name.toLowerCase()
		})
		return m_name[index]
	}

	var print_name = findname(myList,input);
	console.log(print_name)

	var finda_name = function(a_name,actor_name) {
		var index = a_name.findIndex(function(x) {
			return x.actor_name.toLowerCase() === actor_name.toLowerCase()
		})
		return a_name[index]
	}

	var print_a_name = finda_name(myList,input1);
	console.log(print_a_name)

	if (print_name) {
		document.write("Movie Name: " + print_name.name + "<br>")
		document.write("Release Date: " + print_name.release_date + "<br>")
		document.write("Actor: " + print_name.actor_name + "<br>")
		document.write("Producer: " + print_name.producer_name + "<br>")
	}
	if (print_a_name) {
		document.write("Movie Name: " + print_a_name.name + "<br>")
		document.write("Release Date: " + print_a_name.release_date + "<br>")
		document.write("Actor: " + print_a_name.actor_name + "<br>")
		document.write("Producer: " + print_a_name.producer_name + "<br>")
	}
}