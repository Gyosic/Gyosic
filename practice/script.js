const ul = document.querySelector('.city-list')
const countrySpan = document.querySelector('.country')
const citySpan = document.querySelector('.city')
const addressSpan = document.querySelector('.address')

countrySpan.textContent = places[0].country;
citySpan.textContent = places[0].city;
addressSpan.textContent = places[0].address;