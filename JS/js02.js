function math(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var result = document.getElementById("result");
    var x1, x2, temp;
    if (a == ""||a == 0){
        if (b == ""|| b== 0){
            result.innerHTML = "Vui lòng nhập giá trị!";
        } else {
            result.innerHTML = "Phương trình có một nghiệm duy nhất:<br>x = " + c/b;
        }
    } else {
        temp = Math.pow(b,2) - 4*a*c;
            if (temp < 0)
                result.innerHTML = "Phương trình vô nghiệm!";
            else if (temp == 0){
                x1 = (b*(-1))/(2*a);
                result.innerHTML = "Phương trình có nghiệm:<br>x = " +x1.toFixed(2);
            }else {
                x1 = (((-1)*b)+ Math.sqrt(temp))/(2*a);
                x2 = (((-1)*b)- Math.sqrt(temp))/(2*a);
                result.innerHTML = "Phương trình có 2 nghiệm:<br>x1 = " + x1.toFixed(2) + "<br>x2 = " + x2.toFixed(2);
            }
    }  
}

