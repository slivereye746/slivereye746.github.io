function ftnCreate() {
    var x, y;
    for (x = 2; x<10; x++){     
        var newtd = document.createElement("td");
        document.getElementById("elTable").appendChild(newtd);
        for (y = 2; y<10; y++){
            newtd.innerHTML +=  String(x) + " x " + String(y) + " = " + (x*y) + '<br>';

        }
    }
}
