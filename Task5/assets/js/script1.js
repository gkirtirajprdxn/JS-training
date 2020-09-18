var searchEngine = [
    {
      moviename: 'Harry Potter',
      actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],
      directors: ['Chris Columbus', 'Alfonso Cuaron', 'Mike Newell', 'David Yates']
    },
    {
      moviename: 'Interstellar',
      actors: ['Matthew McConaughey', 'Anne Hathaway', 'Michael Caine', 'Jessica Chastain'],
      directors: ['Christopher Nolan']
    },
    {
      moviename: 'Ironman',
      actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Stan Lee'],
      directors: ['Jon Favreau', 'Shane Black']
    },
    {
      moviename: 'Spiderman',
      actors: ['Andrew Garfield', 'Tobey Maguire'],
      directors: ['Sam Raimi']
    },
    {
      moviename: 'Inception',
      actors: ['Leonardo Dicaprio', 'Tom Hardy', 'Michael Caine'],
      directors: ['Christopher Nolan']
    }
];
//console.log(searchEngine[0]['moviename'])

var submitbtn = document.getElementById("submit");
var select = document.getElementById("movies");
submitbtn.addEventListener('click', search);

function search() {
    var input = document.getElementById('name_input').value;
    //console.log(document.getElementById('movies').value);

    if (document.getElementById('movies').value == "mname") {
        var mlist = []
        var find_mname = function(searchEngine, input) {
            for (var i=0; i<searchEngine.length; i++) {
                console.log("----");
                var mnn = searchEngine[i].moviename.toLowerCase()
                if (mnn.includes(input.toLowerCase())) {
                    console.log(searchEngine[i]);
                    mlist.push(searchEngine[i])
                }
            }
            // var index = searchEngine.findIndex(function(list, index) {
            //     return list.moviename.toLowerCase() === input.toLowerCase()
            // })
            // console.log(searchEngine[index]);
        return mlist //obj with matched moviename
        }

        var print_mname = find_mname(searchEngine, input);
        console.log(print_mname) //returns obj

        document.getElementsByClassName('result')[0].innerHTML = '';

        if (print_mname.length) {
            for (var m=0; m<print_mname.length; m++) {
                var movieName = document.createElement("div");
                var actorName = document.createElement("div");
                var directorName = document.createElement("div");
                var movieNameNode = document.createTextNode("Movie Name: " + print_mname[m].moviename);
                var actorNameNode = document.createTextNode("Actors: " + print_mname[m].actors);
                var directorNameNode = document.createTextNode("Directors: " + print_mname[m].directors);

                movieName.appendChild(movieNameNode);
                actorName.appendChild(actorNameNode);
                directorName.appendChild(directorNameNode);

                var resultDiv = document.getElementsByClassName('result');

                resultDiv[0].appendChild(movieName);
                resultDiv[0].appendChild(actorName);
                resultDiv[0].appendChild(directorName);  
            }
        } else {
            document.getElementsByClassName('result')[0].innerHTML = "<strong>Result Not Found</strong>";
        }// else {
            //   document.getElementsByTagName('h3').innerHTML = "<strong>Result Not Found</strong>";
    
    } else if (document.getElementById('movies').value == "aname") {
        var alist = []
        var find_aname = function(searchEngine, input) {
            for (var i = 0; i < searchEngine.length; i++) {
                var lc = searchEngine[i].actors.map(v => v.toLowerCase()) // lc => array
                for (var j=0; j<lc.length; j++) {
                    console.log(lc[j]);
                    console.log("----");
                    if (lc[j].includes(input.toLowerCase())) {
                        alist.push(searchEngine[i])
                    }
                }
            }
        return alist // array of matched actors objects
        //console.log(alist)
        }
    
        var print_aname = find_aname(searchEngine, input);
        console.log(print_aname);
        //console.log(print_aname[a]) //returns obj

        document.getElementsByClassName('result')[0].innerHTML = '';

        if (print_aname.length) {
            for (var a=0; a<print_aname.length; a++) {
                var movieName = document.createElement("div");
                var actorName = document.createElement("div");
                var directorName = document.createElement("div");
                var movieNameNode = document.createTextNode("Movie Name: " + print_aname[a].moviename);
                var actorNameNode = document.createTextNode("Actors: " + print_aname[a].actors);
                var directorNameNode = document.createTextNode("Directors: " + print_aname[a].directors);

                movieName.appendChild(movieNameNode);
                actorName.appendChild(actorNameNode);
                directorName.appendChild(directorNameNode);

                var resultDiv = document.getElementsByClassName('result');

                resultDiv[0].appendChild(movieName);
                resultDiv[0].appendChild(actorName);
                resultDiv[0].appendChild(directorName);
            }
        } else {
            document.getElementsByClassName('result')[0].innerHTML = "<strong>Result Not Found</strong>";
        }
    // } else {
    //   document.getElementsByClassName('result')[0].innerHTML = "<strong>resultsult Not Found</strong>";
    // }
    } else if (document.getElementById('movies').value == "dname") {
        var dlist = []
        var find_dname = function(searchEngine, input) {
            for (var i = 0; i < searchEngine.length; i++) {
                var lc = searchEngine[i].directors.map(v => v.toLowerCase())
                for (var j=0; j<lc.length; j++){
                    console.log(lc[j]);
                    console.log("----");
                    if (lc[j].includes(input.toLowerCase())) {
                        //console.log('found')
                        dlist.push(searchEngine[i])
                        //console.log(searchEngine[i])
                    }
                }
            }
        return dlist // array of matched directors objects
        //console.log(dlist)
        }

        var print_dname = find_dname(searchEngine, input);
        console.log(print_dname);
        
        document.getElementsByClassName('result')[0].innerHTML = '';

        if (print_dname.length) {
            for (var d=0; d<print_dname.length; d++) {
                var movieName = document.createElement("div");
                var actorName = document.createElement("div");
                var directorName = document.createElement("div");
                var movieNameNode = document.createTextNode("Movie Name: " + print_dname[d].moviename);
                var actorNameNode = document.createTextNode("Actors: " + print_dname[d].actors);
                var directorNameNode = document.createTextNode("Directors: " + print_dname[d].directors);

                movieName.appendChild(movieNameNode);
                actorName.appendChild(actorNameNode);
                directorName.appendChild(directorNameNode);

                var resultDiv = document.getElementsByClassName('result');

                resultDiv[0].appendChild(movieName);
                resultDiv[0].appendChild(actorName);
                resultDiv[0].appendChild(directorName);
            }
        } else {
            document.getElementsByClassName('result')[0].innerHTML = "<strong>Result Not Found</strong>";
        }
    }
    // } else {
    //     document.getElementsByClassName('result')[0].innerHTML = "<strong>Result Not Found</strong>";
    // }
}

// 'Add Button' function

document.getElementById('add_btn').addEventListener('click', onFormSubmit);
document.querySelector('#add').addEventListener('submit', function(e){ e.preventDefault(); });

var mi = document.getElementById('movie_input').value
var ai = document.getElementById('actor_input').value
var di = document.getElementById('director_input').value


// if (mi != '' && ai != '' && di != '') 
function onFormSubmit(){
    var formData = readFormData();
    mObject(formData);
    return false;
}
// } else {console.log('not allowed')}

function readFormData(){
    var formData = {};
    formData['moviename'] = document.getElementById('movie_input').value;
    formData['actors'] = document.getElementById('actor_input').value;
    formData['directors'] = document.getElementById('director_input').value;
    return formData;
}

function mObject(formData) {
    var exists = false;
    for (var x=0; x < searchEngine.length; x++) {
        var input_mn =  formData.moviename.toLowerCase()
        var mn = searchEngine[x].moviename.toLowerCase()
        if (input_mn == mn) {
            //movie exists
            alert('This movie already exists! Add another!');
            exists = true;
            break;
        } 
    }
    if (!exists) { 
        //movie doesn't exists
        searchEngine.push(formData)
        alert("Movie added Successfully!")  
    }

    var input_an = formData.actors.split(',')
    var input_dn = formData.directors.split(',')
    //console.log(input_an) //array of ',' seperated elements
    //console.log(input_dn) //array of ',' seperated elements

    formData['actors'] = input_an
    formData['directors'] = input_dn
    console.log(searchEngine) 
}