var x = setInterval(function() {
    var str01 = document.getElementById("result01").innerText;
    var str02 = document.getElementById("result02").innerText;

    var l1 = str01.length;        
    var x1 = str01[0];
    var y1 = str01.slice(1,l1);
    var index1 = y1 + x1;
    document.getElementById("result01").innerHTML = index1;
    
    var l2 = str02.length;
    var x2 = str02[l2-1];
    var y2 = str02.slice(0,l2-1);
    var index2 = x2 + y2;
    document.getElementById("result02").innerHTML = index2;
}, 1000);