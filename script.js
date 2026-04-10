document.getElementById("eventForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let hp = document.getElementById("hp").value;

    if(nama === "") alert("Nama kosong");
    else if(!email.includes("@")) alert("Email salah");
    else if(hp <= 0) alert("HP harus positif");
    else alert("Berhasil!");
});

let items = ["Seminar","Workshop"];

function renderItems(){
    let list = document.getElementById("itemList");
    list.innerHTML = "";

    items.forEach((item, i)=>{
        list.innerHTML += item + " <button onclick='deleteItem("+i+")'>X</button><br>";
    });
}

function addItem(){
    let val = document.getElementById("newItem").value;
    if(val){
        items.push(val);
        renderItems();
    }
}

function deleteItem(i){
    items.splice(i,1);
    renderItems();
}

renderItems();document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", function(){
        alert("Pesanan berhasil! Tim kami akan menghubungi Anda.");
    });
});document.querySelectorAll(".order-btn").forEach((btn, index) => {
    btn.addEventListener("click", function(){

        let eventSelect = document.getElementById("event");

        if(index === 0) eventSelect.value = "wedding";
        if(index === 1) eventSelect.value = "birthday";
        if(index === 2) eventSelect.value = "corporate";

        window.location.href = "#form";
    });
});