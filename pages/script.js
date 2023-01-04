//document.querySelector(".fami").addEventListener("input", ()=> {
//   let data = document.querySelector(".fami").value;
//    document.querySelector(".out-5").innerHTML = data;
//});

document.querySelector('#fam').addEventListener('input', myClick) ;

function myClick() {
    let a = document.querySelector('#fam').value;
    console.log(a);
    document.querySelector('.fami').innerHTML += a;
    if (a == "Dima"){
        alert("Daaaaa");
    }
}

