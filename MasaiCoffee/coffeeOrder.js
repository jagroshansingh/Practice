const coffeeOrder = () => {
//   document.addEventListener("DOMContentLoaded", () => {
    let quantity, total, cname;
    let size = {
      val: undefined,
      Small: 50,
      Medium: 100,
      Large: 150,
    };
    let ctype = {
      val: undefined,
      Americano: 2,
      Expresso: 1.4,
      Cappuccino: 1,
    };
    let customerName = document.querySelector("#customerName");
    customerName.addEventListener("change", (el) => {
      cname = el.target.value;
    });

    let coffeeType = document.querySelector("#coffeeType");
    coffeeType.addEventListener("change", (el) => {
      ctype.val = el.target.value;
    });
    // document.querySelector('#coffeeType').oninput=(el)=>{console.log(el.target.value)}

    let sze = document.querySelector("#size");
    sze.addEventListener("change", (el) => {
      size.val = el.target.value;
    });

    let quan = document.querySelector("#quantity");
    quan.addEventListener("input", (el) => {
      quantity = el.target.value;
    });

    let tot = document.getElementById("total");
    document.querySelector("form").addEventListener("input", (el) => {
        console.log(el)
      if (ctype.val && size.val && quantity) {
        total = ctype[ctype.val] * size[size.val] * quantity;
        // console.log(total)
        tot.innerHTML = "";
        tot.style.color = "red";
        tot.append("₹ ", total);
      }
    });

    //--------------------putting data in LS-------------------------
    document.querySelector("form").addEventListener("submit", (el) => {
      el.preventDefault();

      if (!cname || !total) alert("Empty Fields");
      else {
        let obj = { cname, ctype: ctype.val, size: size.val, quantity, total };
        let arr = JSON.parse(localStorage.getItem("MasaiCoffee")) || [];
        arr.push(obj);
        localStorage.setItem("MasaiCoffee", JSON.stringify(arr));

        //-----------for clearing the form again--------------------
        coffeeType.value = "";
        customerName.value = "";
        sze.value = "";
        quan.value = "";
        tot.innerText = "";
        // location.reload()
      }
    });
//   });
};

export default coffeeOrder


