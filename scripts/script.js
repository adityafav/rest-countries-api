const countries = document.querySelector('#countries');

axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
        res.data.forEach(element => {
            console.log(element.name)
            countries.innerHTML += '<div class="country-card col-12 col-sm-6 col-md-4 col-lg-3 mb-5 rounded">' +
            '<img src='+ element.flag + ' class="rounded-top w-100">' +
            '<div class="country-info ml-4">' +
                '<h5 class="my-4">'+ element.name +'</h5>'+
                '<p class="mb-1"><strong>Population</strong>:'+ element.population +'</p>'+
                '<p class="mb-1"><strong>Region</strong>:'+ element.region +'</p>'+
                '<p class="mb-5"><strong>Capital</strong>:'+ element.capital +'</p>'+
            '</div>'+
        '</div>' ; 
        });
    })