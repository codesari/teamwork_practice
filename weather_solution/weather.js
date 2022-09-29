const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section ul.cities");

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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

  try {
    // const response = await fetch(url).then((res) => res.json());
    // * using AXİOS
    const response = await axios(url);
    console.log(response);
    const { main, sys, weather, name } = response.data;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const cityNameSpans = list.querySelectorAll(".city span");
    const cityNameSpansArray = Array.from(cityNameSpans);
    if (cityNameSpansArray.length > 0) {
      const filteredArray = cityNameSpansArray.filter(
        (span) => span.innerText == name
      );
      if (filteredArray.length > 0) {
        msg.innerText = `You already know the weather for ${name}, Please search for another city `;
        // ! 5 sn sonra mesajı sil
        setTimeout(() => {
          msg.innerText = "";
        }, 5000);
        form.reset();
        return;
      }
    }
    console.log(cityNameSpans);
    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${
      sys.country
    }">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${iconUrl}">
                <figcaption>${weather[0].description}</figcaption>
            </figure>`;

    //* append vs prepend
    // * son eklenen önce gözüksün
    list.prepend(createdLi);
  } catch (error) {}

  //   form.reset();
};
// ! div veya p elementleri yerine semantic olan figure,figcaption kullanımı SEO acisindan cok önemli..
// getWeatherDataFromApi();
