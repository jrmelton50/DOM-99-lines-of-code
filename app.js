var singButton = document.getElementById("button");
var friends = ["Kaitlyn", "Josh", "Scott", "Alex", "Allison"];

singButton.addEventListener("click", sing);

function sing() {
    for (var i = 0; i < friends.length; i++) {
        var name = friends[i];
        var div = createFriendDiv(name);
        console.log(div);
        for (var j = 99; j > 0; j--) {
            displayLineOfSong(div, name, j);
        }
    }
}

function createFriendDiv(name) {
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var text = document.createTextNode(name);
    h3.appendChild(text);
    div.appendChild(h3);
    div.className = "friend";
    document.body.appendChild(div);
    return div;
}

function displayLineOfSong(div, name, number) {
    var lineToDisplay = document.createElement("p");
    if (number == 1) {
        var text = document.createTextNode(number + " line of code in the file, " + number + " line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
        // console.log(number + " line of code in the file, " + number + " line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
    }
    else {
        var text = document.createTextNode(number + " lines of code in the file, " + number + " lines of code; " + name + " strikes one out, clears it all out, " + (number - 1) + " lines of code in the file");
        // console.log(number + " lines of code in the file, " + number + " lines of code; " + name + " strikes one out, clears it all out, " + (number - 1) + " lines of code in the file");
    }
    lineToDisplay.appendChild(text);
    div.appendChild(lineToDisplay);
}