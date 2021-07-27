function pheptinh(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var result = document.getElementById("result");
    var rs;

    const rbs = document.querySelectorAll('input[name="pheptinh"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }              
    if (x==''||y=='')
    {
        result.innerHTML = "Vui lòng nhập số!";
    } else{
        switch (selectedValue){
            case "cong":
                rs = Number(x)+ Number(y);
                result.innerHTML = rs;
                break;
            case "tru":
                rs = x - y;
                result.innerHTML = rs;
                break;
            case "nhan":
                rs = x * y;
                result.innerHTML = rs;
                break;
            case "chia":
                if (y == 0){
                    result.innerHTML = "Mẫu số phải khác 0!";
                } else {
                    rs = x / y;
                    result.innerHTML = rs;
                }
                break;
        }
    }
}