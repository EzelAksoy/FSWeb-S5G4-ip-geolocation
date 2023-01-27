//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
const obje = {
  sorgu: "85.108.196.185",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "34",
  bölgeAdı: "Istanbul",
  şehir: "Istanbul",
  zip: "34134",
  enlem: 41.014499999999998181010596454143524169921875,
  boylam: 28.9532999999999987039700499735772609710693359375,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "TurkTelecom",
  organizasyon: "Turk Telekomunikasyon A.S",
  as: "AS47331 TTNet A.S.",
};

function yeniÖzellik(obje) {
  let kart = document.createElement("div");
  kart.className = "card";
  let resim = document.createElement("img");
  resim.setAttribute("src", obje.ülkebayrağı);
  kart.appendChild(resim);
  let kartBilgi = document.createElement("div");
  kartBilgi.classList.add("card-info");
  kart.appendChild(kartBilgi);
  let IP = document.createElement("h");
  IP.className = "ip";
  IP.textContent = obje.sorgu;
  kartBilgi.appendChild(IP);
  let paragraf = document.createElement("p");
  paragraf.className = "ulke";
  paragraf.textContent = `${obje.ülke}(${obje.ülkeKodu})`;
  kartBilgi.appendChild(paragraf);
  let paragrafEnlem = document.createElement("p");
  paragrafEnlem.textContent = `Enlem:${obje.enlem} Boylam:${obje.boylam}`;
  kartBilgi.appendChild(paragrafEnlem);
  let paragrafSehir = document.createElement("p");
  paragrafSehir.textContent = `Şehir:${obje.şehir}`;
  kartBilgi.appendChild(paragrafSehir);
  let saat = document.createElement("p");
  saat.textContent = `Saat dilimi:${obje.saatdilimi}`;
  kartBilgi.appendChild(saat);
  let para = document.createElement("p");
  para.textContent = `Para birimi:${obje.parabirimi}`;
  kartBilgi.appendChild(para);
  let sonParagraf = document.createElement("p");
  sonParagraf.textContent = `ISP:${obje.isp}`;
  return kart;
}

const objeyiGetir = async function () {
  await ipAdresimiAl();
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/" + benimIP,
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      document.querySelector(".cards").appendChild(yeniÖzellik(a));
    });
};
objeyiGetir();
