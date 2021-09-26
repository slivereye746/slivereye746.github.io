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
        var countA = str.length() - string.replaceAll("g","").length();
        if (countA > 0) {
            document.getElementById("rs").innerHTML += "Character 'A': " + countA.toString();
        }
        const stringArr = split
        const lietke = []; 
        

        
    }
    else {
        document.getElementById("rs").innerHTML = "Vui lòng nhập chuỗi!";
    }
    
}