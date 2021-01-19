const countries = document.querySelector('#countries');
const toggle_icon = document.querySelector('#toggle_mode i');
const toggle_buttons = document.querySelectorAll('#toggle_mode button');
const body = document.querySelector('body');
const fields = "?fields=name;flag;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders"

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
const insert = (res) => {
    res.data.forEach(e => {
        countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
    });
}

const home = () => {
    axios.get('https://restcountries.eu/rest/v2/all' + fields)
    .then(countries.innerHTML = "")
    .then(res => {
        insert(res);
    })
}

const region_select = (region) => {
    axios.get('https://restcountries.eu/rest/v2/region/'+ region + fields)
    .then(countries.innerHTML = "")
    .then(res => {
        insert(res);
    })
}

const search = (name) => {
    if(name === ""){
        home();
    }
    else
        axios.get('https://restcountries.eu/rest/v2/name/'+ name + fields)
        .then(countries.innerHTML = "")
        .then(res => {
            insert(res);
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