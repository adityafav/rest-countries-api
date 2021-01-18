const countries = document.querySelector('#countries');
const toggle_icon = document.querySelector('#toggle_mode i');
const toggle_buttons = document.querySelectorAll('#toggle_mode button');

const home = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(countries.innerHTML = "")
    .then(res => {
        res.data.forEach(element => {
            countries.innerHTML += 
            '<div class="country-card col-12 col-sm-6 col-md-4 col-lg-3 mb-5 rounded">' +
                '<div class="country-card-content pb-5 rounded">' +
                    '<img src=' + element.flag + ' class="rounded-top w-100">' +
                    '<div class="country-info ml-4">' +
                        '<h5 class="my-4">' + element.name +'</h5>'+
                        '<p class="mb-1"><strong>Population</strong>: ' + element.population +'</p>'+
                        '<p class="mb-1"><strong>Region</strong>: ' + element.region +'</p>'+
                        '<p class=""><strong>Capital</strong>: ' + element.capital +'</p>'+
                    '</div>'+
                '</div>' +
            '</div>' ;
        });
    })
}

const region_select = (region) => {
    axios.get('https://restcountries.eu/rest/v2/region/'+ region)
    .then(countries.innerHTML = "")
    .then(res => {
        res.data.forEach(element => {
            countries.innerHTML += 
            '<div class="country-card col-12 col-sm-6 col-md-4 col-lg-3 mb-5 rounded">' +
                '<div class="country-card-content pb-5 rounded">' +
                    '<img src=' + element.flag + ' class="rounded-top w-100">' +
                    '<div class="country-info ml-4">' +
                        '<h5 class="my-4">' + element.name +'</h5>'+
                        '<p class="mb-1"><strong>Population</strong>: ' + element.population +'</p>'+
                        '<p class="mb-1"><strong>Region</strong>: ' + element.region +'</p>'+
                        '<p class=""><strong>Capital</strong>: ' + element.capital +'</p>'+
                    '</div>'+
                '</div>' +
            '</div>' ;
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
            countries.innerHTML += 
            '<div class="country-card col-12 col-sm-6 col-md-4 col-lg-3 mb-5 rounded">' +
                '<div class="country-card-content pb-5 rounded">' +
                    '<img src=' + element.flag + ' class="rounded-top w-100">' +
                    '<div class="country-info ml-4">' +
                        '<h5 class="my-4">' + element.name +'</h5>'+
                        '<p class="mb-1"><strong>Population</strong>: ' + element.population +'</p>'+
                        '<p class="mb-1"><strong>Region</strong>: ' + element.region +'</p>'+
                        '<p class=""><strong>Capital</strong>: ' + element.capital +'</p>'+
                    '</div>'+
                '</div>' +
            '</div>' ;
        });
    })
}

const toggle_mode = () => {
    toggle_icon.classList.toggle('fa-moon');
    toggle_icon.classList.toggle('fa-sun');
    toggle_buttons.forEach(e => {
        e.classList.toggle('hidden');
    })
}