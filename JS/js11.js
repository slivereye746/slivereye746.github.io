function Add(){
    var str = document.getElementById("input").value;
    if (str != "") {
        //
        var str2 = str.replace(/\s+/g, " ");
        str2 = str2.trim();
        const arr = str2.split(" ");
        //
        let leng = str.length;
        //
        document.getElementById("rs").innerHTML = "Character: "+ leng.toString() + "<br>" 
                                                + "Words: " + arr.length + "<br>";
        //
        for (let i = 33; i < 127; i++) {
            let item = String.fromCharCode(i);
            let count = str2.length - str2.replace(item,'').length;
            if (count > 0) {
                document.getElementById("rs").innerHTML += "Character '"+ item + "': " + count.toString() + "<br>";
            }
            
        }
    }
    else {
        document.getElementById("rs").innerHTML = "Vui lòng nhập chuỗi!";
    }
    
}