const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector(".span msg");
const list = document.querySelector(".ajax-section .cities");

// ! token
localStorage.setItem(
  "tokenKey",
  "5EtZlhgMu9CQn7zV4uD4F5zFYGqxKzmN9vobbH6/7alkWz+fJD7WKuejncIrqdsH"
);
// localStorage.setItem(
//   "encryptedTokenKey",
//   EncryptStringAES("c596300e44a2dbdfa3b87cda29ff8d7b")
// );
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // ! prevent--> defaultta sahip oldugu özellikleri unut,benim vereceğim özellikleri yap
  getWeatherDataFromApi();
});

//! form kullanmanın avantajı icinde enter da tetikli..yani diger yönteme göre ayrı ayrı event oluşturmak gerekmiyor

const getWeatherDataFromApi = async () => {
  //   alert("http request is gone")
  const encryptedToken = localStorage.getItem("tokenKey");
  //   console.log(encryptedToken);
  const tokenKey = DecryptStringAES(encryptedToken);
  //   console.log(tokenKey);
  const inputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${tokenKey}&units=${units}&lang=${lang}`;
  const response = await fetch(url).then((res) => res.json());
  console.log(response);
  const { main, sys, weather, name } = response;
  const iconURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

  const createdLi = document.createElement("li")
  createdLi.classList.add("city")
  createdLi.innerHTML =
};
getWeatherDataFromApi();
