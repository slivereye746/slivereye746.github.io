function Sign(){
    var RS = document.getElementById("txtRs");
    var password = document.getElementById("pass").value;
    var birthday = document.getElementById("bday").value;
    if(document.getElementById("name").value == ""){
        RS.innerHTML = "Vui lòng nhập tên!"
    } else if (password == ""){
        RS.innerHTML = "Vui lòng nhập mật khẩu!"
    } else if (birthday == ""){
        RS.innerHTML = "Vui lòng chọn ngày sinh!"
    } else {
        var gioitinh;
        var passL = String(password).length;   
        var byear= String(birthday).substring(0,4);
        var bmonth = String(birthday).substring(5,7);
        var bday = String(birthday).substring( 8,10);
    
        if (document.getElementById("nam").checked){
            gioitinh = "Nam";
        } else{
            gioitinh = "Nữ";
        }
        RS.innerHTML = "Chào mừng " + document.getElementById("name").value
                                                     + "\nBạn là "+ gioitinh
                                                     + "\nMật khẩu của bạn có " +passL+  " ký tự" 
                                                     + "\nBạn sinh ngày " + bday + "/" + bmonth+ "/" + byear
                                                     + "\nVấn đề mà bạn quan tâm là " + document.getElementById("selec").value;
    }
}
function Clear(){
    document.getElementById("name").value="";
    document.getElementById("pass").value="";
    document.getElementById("bday").value="";
    document.getElementById("txtRs").value="";
}