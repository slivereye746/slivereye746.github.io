function Add() {
    //document.getElementById("rs").value = "";
    if (document.getElementById("input").value == "") {
        document.getElementById("rs").innerHTML = "Vui lòng nhập số phần tử mảng!";
    }
    else {
        var n = document.getElementById("input").value;
        arr = new Array(n);
        document.getElementById("rs").innerHTML = "Mảng ban đầu: ";
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(Math.random()*50);
            document.getElementById("rs").innerHTML += ' &nbsp ' + arr[i];
        }
    } 
    document.getElementById("sx1").innerHTML = "";
    document.getElementById("sx2").innerHTML = "";
}

function SapXep1() {
    arr.sort();
    var str  = "Mảng tăng dần: ";
    for (let i = 0; i < n; i++) {
        str += ' &nbsp ' + arr[i];
    }
    document.getElementById("sx1").innerHTML = str.toString();
}

