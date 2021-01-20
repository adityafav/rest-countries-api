const countries = document.querySelector('#countries');
const toggle_icon = document.querySelector('#toggle_mode i');
const toggle_buttons = document.querySelectorAll('#toggle_mode button');
const body = document.querySelector('body');
const api = "https://restcountries.eu/rest/v2/";
const fields = "?fields=name;flag;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders"


// get api data (only once)
const getdata = () => {
    var executed = false;
    if (!executed) {
        executed = true;
        axios.get( api + 'all' + fields)
        .then(res => {
            sessionStorage.setItem("countries", JSON.stringify(res.data));
        })
    }
} 
getdata();

// localised api data
const data = JSON.parse(sessionStorage.getItem("countries"));


// dark mode
const toggle_mode = () => {
    toggle_icon.classList.toggle('fa-moon');
    toggle_icon.classList.toggle('fa-sun');
    toggle_buttons.forEach(e => {
        e.classList.toggle('hidden');
    })
    body.classList.toggle('darkmode');
}


// home page
var country_card = (flag,name,population,region,capital) => {
    return '<div class="country-card col-12 col-sm-6 col-md-4 col-lg-3 mb-5 rounded">' +
                '<div class="country-card-content pb-5 rounded" id="'+ name +'" onclick="details(id)">' +
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
const insert = (data) => {
    data.forEach(e => {
        countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
    });
}

const home = () => {
    countries.innerHTML = "";
    insert(data);
}

const region_select = (region) => {
    countries.innerHTML = "";
    data.forEach(e => {
        if(e.region === region){
            countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
        }
    });
}

const search = (name) => {
    if(name === ""){
        home();
    }
    else
        countries.innerHTML = "";
        data.forEach(e => {
            if(e.name.toLowerCase().includes(name)){
                countries.innerHTML += country_card(e.flag, e.name, e.population, e.region, e.capital);
            }
        })
}

const details = (arg) => {
    sessionStorage.setItem("country", arg)
    location.href = "detail.html"
}


// details page
const detailflag = document.querySelector('#flag');
var country = sessionStorage.getItem("country")

var detail_card = (flag) =>{
    return '<img src="'+ flag + '" class="w-100"></img>'
}
const insert_detail = (res) =>{
    res.data.forEach(e => {
        detailflag.innerHTML += detail_card(e.flag);
    });
}


const details_load = () => {
    let country = sessionStorage.getItem("country");
    axios.get( api + 'name/' + country + '?fullText=true' + fields)
    .then(flag.innerHTML = "")
    .then(res => {
        insert_detail(res);
    })

}