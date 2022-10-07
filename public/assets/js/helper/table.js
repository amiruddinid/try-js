class Table extends Render{
    static tableEl = "";

    constructor(){
        super();
    }

    init(el){
        el.innerHTML +=
            `<table id="table" class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Manufaktur</th>
                        <th scope="col">Transmisi</th>
                        <th scope="col">Tahun</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
          `
        
        this.tableEl = document.getElementById('table')
    }
    renderBody(data){
        // const tbody = this.tableEl.childNodes[3];
        const tbody = this.tableEl.querySelector('tbody');
        let result = "";
        for(let i = 0; i < data.length; i++){
            result +=`<tr>
                <td>${i+1}</td>
                <td>${data[i].nama}</td>
                <td>${data[i].manufaktur}</td>
                <td>${data[i].transmisi}</td>
                <td>${data[i].tahun}</td>
            </tr>`
        }
        tbody.innerHTML = result;
    }
}