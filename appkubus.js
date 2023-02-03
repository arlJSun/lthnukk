const kubusForm = document.getElementById("kubusForm");
const rusuk = document.getElementById("r");
const tampil = document.getElementById("tampil");

const hasilKubus = JSON.parse(localStorage.getItem("kubus")) || [];

const addKubus = (rusuk, hasil) => {
    hasilKubus.push({
        rusuk,
        hasil
    });
    localStorage.setItem("kubus", JSON.stringify(hasilKubus));

    return {rusuk, hasil}
}

const buatKubus = function ({ rusuk, hasil }) {

    const divKubus = document.createElement("div");
    const hitungrusuk = document.createElement("p");
    const hitunghasil = document.createElement("h2");
    const hr = document.createElement("hr")

    hitungrusuk.innerHTML = "rusuk :" + rusuk;
    hitunghasil.innerHTML = "Luas Kubus " + hasil;

    divKubus.append(hitungrusuk, hitunghasil, hr);
    tampil.appendChild(divKubus);

};

hasilKubus.forEach(buatKubus);

kubusForm.onsubmit = e => {
    e.preventDefault();

    const vRusuk = rusuk.value;
    const luas = (vRusuk * vRusuk *vRusuk);

    const kubusBaru = addKubus(
        vRusuk,
        luas
    );
    buatKubus(kubusBaru);

    rusuk.value= "";
};