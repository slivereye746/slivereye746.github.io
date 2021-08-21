var x = prompt("Tên:", "Vị Vua vĩ đại của những hành tinh xa xôi!");
if (x!= null) {
    var y = prompt("Năm Sinh:", "Ngày người lần đầu nhìn thấy ánh sáng của vương quốc!");
    if (y !=null){
        document.getElementById("name").innerHTML = x.toString();
        document.getElementById("day").innerHTML = y.toString();
    }
    else {
        y = prompt("Năm Sinh:\n Vui lòng chọn ngày sinh!", "Ngày người lần đầu nhìn thấy ánh sáng của vương quốc!");
    }
}
else {
    
}
document.getElementById("name").innerHTML = "x.toString()";
document.getElementById("day").innerHTML = "y.toString()";