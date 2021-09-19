function Add1() {
    var str1 = document.getElementById("input").value;
    str1 = str1.split(/\s+/).reverse().join(" ");
    document.getElementById("input").value = str1;
    
}
function Add2() {
    var str2 = document.getElementById("input").value;
    str2 = str2.replace(/\s+/g, " ");
    str2 = str2.trim();
    var rs = "";
    let nu = 0;
    //str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    for (let i = 0; i < str2.length; i++) {
        if (i == 0) {
            rs += str2[i].toUpperCase();
        }
        else if (str2.charAt(i)== " ") {
            rs += " " + str2[i+1].toUpperCase();
            i++;
        }
        else {
            rs += str2[i];
        }
    }
    document.getElementById("input").value = rs;
}