class Project {
    constructor(name = "Untitled") {
        this.name = name
        this.tables = []
        this.table_id = 0
    }

    addTable(table) {
        this.tables.push(table)
        this.table_id++
    }

    remTable(table_id) {
        table.disconnect()
        this.tables.remove(this.find_table_idx(table_id))
    }

    find_table_idx(table_id){
        return this.tables.findIndex((elem) => elem.id === table_id)
    }

}