const countries = document.querySelector('#countries');
const toggle_icon = document.querySelector('#toggle_mode i');
const toggle_buttons = document.querySelectorAll('#toggle_mode button');
const body = document.querySelector('body');


var country_card = (flag,name,population,region,capital) => {
    return '<div class="country-card col-12 col-sm-6 col-md-4 col-lg-3 mb-5 rounded">' +
                '<div class="country-card-content pb-5 rounded">' +
                    '<div class="country-image">' +
                        '<img src=' + flag + ' class="rounded-top w-100 h-100">' +
                    '</div>'+
                    '<div class="country-info ml-4">' +
                        '<p class="my-4"><strong>' + name +'</strong></p>'+
                        '<p class="mb-1"><strong>Population</strong>: ' + population +'</p>'+
                        '<p class="mb-1"><strong>Region</strong>: ' + region +'</p>'+
                        '<p class=""><strong>Capital</strong>: ' + capital +'</p>'+
                    '</div>'+
                '</div>' +
            '</div>' ;
}

const home = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(countries.innerHTML = "")
    .then(res => {
        res.data.forEach(e => {
            countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
        });
    })
}

const region_select = (region) => {
    axios.get('https://restcountries.eu/rest/v2/region/'+ region)
    .then(countries.innerHTML = "")
    .then(res => {
        res.data.forEach(element => {
            countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
        });
    })
}

const search = (name) => {
    if(name === ""){
        home();
    }
    axios.get('https://restcountries.eu/rest/v2/name/'+ name)
    .then(countries.innerHTML = "")
    .then(res => {
        res.data.forEach(element => {
            countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
        });
    })
}

const toggle_mode = () => {
    toggle_icon.classList.toggle('fa-moon');
    toggle_icon.classList.toggle('fa-sun');
    toggle_buttons.forEach(e => {
        e.classList.toggle('hidden');
    })
    body.classList.toggle('darkmode');
}