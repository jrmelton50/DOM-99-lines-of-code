var friends = ["Kaitlyn", "Josh", "Scott", "Alex", "Allison"];

for (var i=0; i<friends.length; i++) {
    var name = friends[i];
    console.log(name + ":");
    for (var j=99; j>0; j--) {
        if (j == 1) {
            console.log(j + " line of code in the file, " + j + " line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
        }
        else {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + name + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file");
        }
    }
}