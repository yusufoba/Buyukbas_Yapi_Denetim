var hesapTablosu = document.getElementById("yapidenetimhesaptablosu");
var yapidenetimucretbaslik = document.getElementById("yapidenetimucretbaslik");
var uyari1000m = document.getElementById("1000mUyari");
var isbitirmeuyari = document.getElementById("isbitirmeuyari");
var insaatsinifiuyari = document.getElementById("insaatsinifiuyari");
var tabloyukapatbtn = document.getElementById("tabloyukapat");

yapidenetimucretbaslik.style.display = "none";
hesapTablosu.style.display = "none";
uyari1000m.style.display = "none";
isbitirmeuyari.style.display = "none";
insaatsinifiuyari.style.display = "none";
tabloyukapatbtn.style.display = "none";

function degergoster() {
  var insAlani = document.getElementById("insAlani").value;
  var selectkutu = document.getElementById("isBitirilmeSuresi");
  var selectkutu_value = selectkutu.options[selectkutu.selectedIndex].value;
  var isBitirmeKatSayi = 0;
  switch (selectkutu_value) {
    case "0":
      isBitirmeKatSayi = null;
      break;
    case "1":
      isBitirmeKatSayi = 1.5;
      break;
    case "2":
      isBitirmeKatSayi = 1.5;
      break;
    case "3":
      isBitirmeKatSayi = 1.5;
      break;
    case "4":
      isBitirmeKatSayi = 1.5;
      break;
    case "5":
      isBitirmeKatSayi = 1.58;
      break;
    case "6":
      isBitirmeKatSayi = 1.58;
      break;
    case "7":
      isBitirmeKatSayi = 1.66;
      break;
    case "8":
      isBitirmeKatSayi = 1.66;
      break;
    case "9":
      isBitirmeKatSayi = 1.74;
      break;
    case "10":
      isBitirmeKatSayi = 1.74;
      break;
    case "10":
      isBitirmeKatSayi = 1.74;
      break;
  }

  var selectkutu2 = document.getElementById("insaatSinifi");
  var selectkutu_value2 = selectkutu2.options[selectkutu2.selectedIndex].value;
  var insaatSinifi2 = 0;

  switch (selectkutu_value2) {
    case "0":
      insaatSinifi2 = null;
      break;
    case "1":
      insaatSinifi2 = 118;

      break;
    case "2":
      insaatSinifi2 = 180;
      break;
    case "3":
      insaatSinifi2 = 290;
      break;
    case "4":
      insaatSinifi2 = 390;
      break;
    case "5":
      insaatSinifi2 = 460;
      break;
    case "6":
      insaatSinifi2 = 630;
      break;
    case "7":
      insaatSinifi2 = 750;
      break;
    case "8":
      insaatSinifi2 = 800;
      break;
    case "9":
      insaatSinifi2 = 920;
      break;
    case "10":
      insaatSinifi2 = 1030;
      break;
    case "11":
      insaatSinifi2 = 1320;
      break;
    case "12":
      insaatSinifi2 = 1610;
      break;
    case "13":
      insaatSinifi2 = 1835;
      break;
    case "14":
      insaatSinifi2 = 2150;
      break;
  }

  var toplamFiyat = document.getElementById("toplamfiyat");
  var deger = (insAlani * insaatSinifi2 * isBitirmeKatSayi) / 100;
  toplamFiyat.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(deger);

  var toplamKdv = document.getElementById("toplamkdv");
  toplamKdv.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 18) / 100);

  var kdvDahil = document.getElementById("toplamkdvdahil");
  kdvDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(deger + (deger * 18) / 100);

  var taksit1Tutar = document.querySelectorAll("#tutar")[0];
  var taksit1KDV = document.querySelectorAll("#kdv")[0];
  var taksit1KDVDahil = document.querySelectorAll("#kdvdahil")[0];

  taksit1Tutar.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 10) / 100);
  taksit1KDV.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((((deger * 10) / 100) * 18) / 100);
  taksit1KDVDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 10) / 100 + (((deger * 10) / 100) * 18) / 100);

  var taksit2Tutar = document.querySelectorAll("#tutar")[1];
  var taksit2KDV = document.querySelectorAll("#kdv")[1];
  var taksit2KDVDahil = document.querySelectorAll("#kdvdahil")[1];

  taksit2Tutar.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 10) / 100);
  taksit2KDV.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((((deger * 10) / 100) * 18) / 100);
  taksit2KDVDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 10) / 100 + (((deger * 10) / 100) * 18) / 100);

  var taksit3Tutar = document.querySelectorAll("#tutar")[2];
  var taksit3KDV = document.querySelectorAll("#kdv")[2];
  var taksit3KDVDahil = document.querySelectorAll("#kdvdahil")[2];

  taksit3Tutar.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 40) / 100);
  taksit3KDV.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((((deger * 40) / 100) * 18) / 100);
  taksit3KDVDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 40) / 100 + (((deger * 40) / 100) * 18) / 100);

  var taksit4Tutar = document.querySelectorAll("#tutar")[3];
  var taksit4KDV = document.querySelectorAll("#kdv")[3];
  var taksit4KDVDahil = document.querySelectorAll("#kdvdahil")[3];

  taksit4Tutar.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 20) / 100);
  taksit4KDV.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((((deger * 20) / 100) * 18) / 100);
  taksit4KDVDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 20) / 100 + (((deger * 20) / 100) * 18) / 100);

  var taksit5Tutar = document.querySelectorAll("#tutar")[4];
  var taksit5KDV = document.querySelectorAll("#kdv")[4];
  var taksit5KDVDahil = document.querySelectorAll("#kdvdahil")[4];

  taksit5Tutar.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 15) / 100);
  taksit5KDV.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((((deger * 15) / 100) * 18) / 100);
  taksit5KDVDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 15) / 100 + (((deger * 15) / 100) * 18) / 100);

  var taksit6Tutar = document.querySelectorAll("#tutar")[5];
  var taksit6KDV = document.querySelectorAll("#kdv")[5];
  var taksit6KDVDahil = document.querySelectorAll("#kdvdahil")[5];

  taksit6Tutar.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 5) / 100);
  taksit6KDV.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((((deger * 5) / 100) * 18) / 100);
  taksit6KDVDahil.textContent = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format((deger * 5) / 100 + (((deger * 5) / 100) * 18) / 100);

  if (insAlani < 1000) {
    hesapTablosu.style.display = "";
    uyari1000m.style.display = "";
    tabloyukapatbtn.style.display = "";
    hesapTablosu.rows[1].style.display = "none";
    hesapTablosu.rows[2].style.display = "none";
    hesapTablosu.rows[3].style.display = "none";
    hesapTablosu.rows[4].style.display = "none";
    hesapTablosu.rows[5].style.display = "none";
    hesapTablosu.rows[6].style.display = "none";
  } else if (insaatSinifi2 == null) {
    hesapTablosu.style.display = "none";
    insaatsinifiuyari.style.display = "";
    tabloyukapatbtn.style.display = "";
  } else if (isBitirmeKatSayi == null) {
    hesapTablosu.style.display = "none";
    isbitirmeuyari.style.display = "";
    insaatsinifiuyari.style.display = "none";
    tabloyukapatbtn.style.display = "";
  } else {
    hesapTablosu.style.display = "";
    yapidenetimucretbaslik.style.display = "";
    uyari1000m.style.display = "none";
    isbitirmeuyari.style.display = "none";
    insaatsinifiuyari.style.display = "none";
    tabloyukapatbtn.style.display = "";
    hesapTablosu.rows[1].style.display = "";
    hesapTablosu.rows[2].style.display = "";
    hesapTablosu.rows[3].style.display = "";
    hesapTablosu.rows[4].style.display = "";
    hesapTablosu.rows[5].style.display = "";
    hesapTablosu.rows[6].style.display = "";
  }
}

function tabloyukapatf() {
  yapidenetimucretbaslik.style.display = "none";
  hesapTablosu.style.display = "none";
  uyari1000m.style.display = "none";
  isbitirmeuyari.style.display = "none";
  insaatsinifiuyari.style.display = "none";
  tabloyukapatbtn.style.display = "none";
}
