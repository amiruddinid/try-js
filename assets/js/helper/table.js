class Table extends Render{
    let tableEl;

    constructor(){
        super();
        this.init()
    }
    
    init(el){
        this.tableEl = el.appendChild(
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
        )
    }

    renderBody(){

    }
}