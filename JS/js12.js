function Add(){
    if (document.getElementById("input").value == "") {
        document.getElementById("text").innerHTML = "Vui lòng nhập chuỗi!"
    }
    else {
        document.getElementById("text").innerHTML = document.getElementById("input").value;
        document.getElementById("show").style.backgroundColor = document.getElementById("bg").value;
        document.getElementById("text").style.color = document.getElementById("txt").value;
    }
}