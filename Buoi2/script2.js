const button2 = document.querySelectorAll(".button2");
const tenSP = document.querySelectorAll(".tenSP");
const giaSP = document.querySelectorAll(".giaSP");

var arr=[]
for (let i = 0; i < button2.length; i++) {
    const el = button2[i];
    //arrow function: function/hàm được khai báo nhưng ko có tên function
    el.addEventListener("click",()=>{
        var tenSP1 = tenSP[i].innerHTML;
        var giaSP1 = giaSP[i].innerHTML;

        var item = new Object();
        item.ten = tenSP1;
        item.gia = giaSP1;
        item.soluong = 1;

        var check = 0;
        arr.forEach(el => {
            if (el.ten == tenSP1) {
                el.soluong++;
                check = 1;
            }
        })
        if (check == 0) {
            arr.push(item)
        }
        var bought = "";
        var number = 1;
        arr.forEach(el1 => {
            var finalPayment = Number(el1.gia)*el1.soluong;
            bought+= `
            <div class="cart">
                <div class="col1">
                    `+(number++)+`
                </div>
                <div class="col1">
                    `+el1.ten+`
                </div>
                <div class="col1">
                    `+el1.soluong+`
                </div>
                <div class="col1">
                    `+el1.gia+`
                </div>
                <div class="col1">
                    `+finalPayment+`
                </div></>
            </div>
            `;
        })
        console.log(bought);
        document.getElementsByClassName("cart1")[0].innerHTML=bought
    });
}
