$(document).ready(function() {
var myFirebaseRef = new Firebase("https://eventapplahacks.firebaseio.com/");

//myFirebaseRef.set('User' + name + 'says' + text);
$('#messageInput').keypress(function (e) {
    if(e.keyCode == 13){ //if user presses enter
        console.log("OKAY");
        var name = $('#nameInput').val();
        console.log(name);
        var text = $('#messageInput').val();
        myFirebaseRef.push({name: name, text: text});
        $('#messageInput').val(''); //makes message empty
    
    }
});
myFirebaseRef.on('child_added', function(snapshot){
var message = snapshot.val(); //gets everything from database
displayChatMessage(message.name, message.text);
});
                            
                   
    //your code here
     function displayChatMessage(name, text) 
    {
        $("#messagesDiv:first").prepend("<div id = \"#messagesDiv\">" + name + ': ' + text + "</div>");
     }

});