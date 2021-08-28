function Add() {
    if (document.getElementById("input").value == "") {
        document.getElementById("rs").innerHTML = "Vui lòng nhập số phần tử mảng!";
    }
    else {
        var n = document.getElementById("input").value;
        arr = new Array(n);
        document.getElementById("rs").innerHTML = "Mảng ban đầu: ";
        for (let i = 0; i < arr.length; i++) {
            array[i] = Math.floor(Math.random()*100 - 50) + 1;
        }
    } 
}

