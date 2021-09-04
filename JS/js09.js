function Add() {
    var n = document.getElementById("input").value;
    if (n == "") {
        document.getElementById("alert").innerHTML = "Vui lòng nhập chuỗi!";
    }
    else {        
        document.getElementById("alert").innerHTML = "";
        //var str1 = document.getElementById("str1").value;
        //var str2 = document.getElementById("str2").value;
        if (document.getElementById("str1").value == "") {
            document.getElementById("str1").placeholder = "Vui lòng chọn chuỗi bị thay thế!";
        }
        else if (document.getElementById("str2").value == "") {
            document.getElementById("str2").placeholder = "Vui lòng chọn chuỗi  thay thế!";
        }
        else {
            var n = n.replaceAll(document.getElementById("str1").value, document.getElementById("str2").value);
            document.getElementById("input").value = n;
        }
        //document.getElementById("input").value = "XX";
        
    }
} 