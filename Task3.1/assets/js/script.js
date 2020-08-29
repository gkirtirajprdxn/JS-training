var index = 0;
var len = 6;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        var posts = JSON.parse(xhr.responseText);
        for(var i=index; i<len; i++){
            var string = "title "+(i+1)+": "+posts[i].title +".\n"+"description "+(i+1)+": "+posts[i].body; 
            var list = document.createElement('li');
            var text = document.createTextNode(string);
            list.appendChild(text);
            document.getElementById('ulist').appendChild(list);
        }
	}
}
xhr.send();