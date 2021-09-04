function Add() {
    var n = document.getElementById("input").value;
    if (n == "") {
        document.getElementById("input").placeholder = "Vui lòng nhập chuỗi!";
    }
    else {        
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