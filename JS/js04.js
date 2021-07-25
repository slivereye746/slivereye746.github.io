var x = setInterval(function() {
    var str = document.getElementById("result").innerText;
        var l = str.length;

        var x = str[0];
        var y = str.slice(1,l);
        var index = y + x;
        document.getElementById("result").innerHTML = index;
}, 1000);