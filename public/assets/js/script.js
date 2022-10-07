const app = document.getElementById("app");
const transmisi = document.getElementsByName('transmisi')[0]
const tahun = document.getElementsByName('tahun')[0];
const manufaktur = document.getElementsByName('manufaktur')[0];
const table = new Table();
const filter = {
    transmisi: '',
    tahun: '',
    manufaktur: '',
}

table.init(app);

table.renderBody(motor);

function filterMotor(){
    const filteredMotor = motor.filter(function(el) {
        const filterTransmisi = filter.transmisi ? el.transmisi === filter.transmisi : true;
        const filterTahun = filter.tahun ? el.tahun === filter.tahun : true;
        const filterManufaktur = filter.manufaktur ? el.manufaktur === filter.manufaktur : true;
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