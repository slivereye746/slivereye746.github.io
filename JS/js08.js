

function Add() {
    //document.getElementById("rs").value = "";
    var n = document.getElementById("input").value;
    if (document.getElementById("input").value == "") {
        document.getElementById("rs").innerHTML = "Vui lòng nhập số phần tử mảng!";
    }
    else {
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
    var n = document.getElementById("input").value;
    if (document.getElementById("input").value < 2) {
        document.getElementById("sx1").innerHTML = "Mảng phải có hơn 2 phần tử!";
    }
    else {
        document.getElementById("sx1").innerHTML = "Mảng tăng dần: ";
        arr.sort(function(a,b){return a-b});
        for (let i = 0; i < n; i++) {
            document.getElementById("sx1").innerHTML += ' &nbsp ' + arr[i];
        }
    }
}
function SapXep2() {
    var n = document.getElementById("input").value;
    if (document.getElementById("input").value < 2) {
        document.getElementById("sx2").innerHTML = "Mảng phải có hơn 2 phần tử!";
    }
    else {
        document.getElementById("sx2").innerHTML = "Mảng giảm dần: ";
        arr.sort(function(a,b){return b-a});
        for (let i = 0; i < n; i++) {
            document.getElementById("sx2").innerHTML += ' &nbsp ' + arr[i];
        }
    }
}
