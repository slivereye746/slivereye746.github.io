function Add() {
    var n = document.getElementById("input").value;
    if (n == "") {
        document.getElementById("alert").innerHTML = "Vui lòng nhập chuỗi!";
    }
    else {
        //str1 = document.getElementById("str1").value;
        //str2 = document.getElementById("str2").value;
        n = n.replace(str1 , str2);
        document.getElementById("input").value = "XX";
    }
}