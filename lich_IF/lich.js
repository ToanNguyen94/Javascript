function ktra(){
    let month = document.getElementById("month").value;
    if (month == "1" || month == "3" || month == "5" || month == "7" || month == "8" ||
    month == "10" ||month == "12") {
        ketqua = 'Tháng ' + month + ' có 31 ngày';
    } else if (month == "4" || month == "6" || month == "9" || month == "11"){
        ketqua = 'Tháng ' + month + ' có 30 ngày';
    } else if (month == 2) {
        ketqua = 'Tháng ' + month + ' có 28 hoặc 29 ngày'
    } else {
        ketqua = "Vui lòng nhập lại số tháng từ 1-12";
    }
        document.getElementById("ketqua").innerHTML = ketqua;
}