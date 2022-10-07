const app = document.getElementById("app");
const transmisi = document.getElementsByName('transmisi')[0]
const tahun = document.getElementsByName('tahun')[0];
const manufaktur = document.getElementsByName('manufaktur')[0];
const search = document.getElementById('cari');
const searchButton = document.getElementById("search");
let currentSort = '';
const table = new Table();
const filter = {
    transmisi: '',
    tahun: '',
    manufaktur: '', 
}

table.init(app);

table.renderBody(motor);

const tableHeader = document.getElementById('table').querySelectorAll('th');

for (let i = 1; i < tableHeader.length; i++) {
    tableHeader[i].addEventListener("click", function() {
        sortMotor(tableHeader[i].textContent.toLowerCase())
    });
}

function sortMotor(sortBy){
    if(currentSort === sortBy){
        currentSort = ''
        motor.sort(function(a, b){
            if(a[sortBy] > b[sortBy]) { return -1; }
            if(a[sortBy] < b[sortBy]) { return 1; }
            return 0;
        })
    }else{
        currentSort = sortBy
        motor.sort(function(a, b){
            if(a[sortBy] < b[sortBy]) { return -1; }
            if(a[sortBy] > b[sortBy]) { return 1; }
            return 0;
        })
    }

    table.renderBody(motor);
}

function filterMotor(){
    const filteredMotor = motor.filter(function(el) {
        const filterTransmisi = filter.transmisi ? el.transmisi.includes(filter.transmisi) : true;
        const filterTahun = filter.tahun ? el.tahun.includes(filter.tahun) : true;
        const filterManufaktur = filter.manufaktur ? el.manufaktur.includes(filter.manufaktur) : true;
        return filterTransmisi && filterTahun && filterManufaktur 
    });

    table.renderBody(filteredMotor);
}

transmisi.addEventListener('change', function(event){
    const val = event.target.value
    filter.transmisi = val === 'Transmisi' ? '' : val 
    filterMotor()
})

tahun.addEventListener('input', function(event){
    const val = event.target.value
    filter.tahun = val
    filterMotor()
})

manufaktur.addEventListener('input', function(event){
    const val = event.target.value
    filter.manufaktur = val
    filterMotor()
})

searchButton.addEventListener('click', (e) => {
    const cari = search.value.toLowerCase();
    const findMotor = motor.filter(o => {
        return o.nama.toLowerCase().includes(cari) 
        || o.manufaktur.toLowerCase().includes(cari) 
        || o.tahun.toLowerCase().includes(cari)
    })
    console.log(findMotor, cari)
    if(!findMotor) return;
    table.renderBody(findMotor);
})