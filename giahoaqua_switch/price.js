let oi = "Giá Ổi là 15.000VND/1kg";
let duahau = "Giá Dưa Hấu là 20.000VND/1kg";
let tao = "Giá Táo là 22.000VND/1kg";
let xoai = "Giá Xoài là 25.000VND/1kg";
let cam = "Giá Cam là 30.000VND/1kg";
let chomchom = "Giá Chôm Chôm là 40.000VND/1kg";
let mangcut = "Giá Măng Cụt là 50.000VND/1kg";
function ktra(){
    let product = document.getElementById("fruit").value;
    switch(product) {
        case "1":
            document.getElementById("result").innerHTML = oi ;
            break;
        case "2":
            document.getElementById("result").innerHTML = duahau;
            break;
        case "3":
            document.getElementById("result").innerHTML = tao;
            break;
        case "4":
            document.getElementById("result").innerHTML =xoai;
            break;
        case "5":
            document.getElementById("result").innerHTML = cam;
            break;
        case "6":
            document.getElementById("result").innerHTML = chomchom;
            break;
        case "7":
            document.getElementById("result").innerHTML = mangcut;
            break;
        default:
            document.write("vui lòng chọn lại sản phẩm");
    }
}