class Table{
    constructor(id, name, comment) {
        this.name = name
        this.comment = comment
        this.column_id = 0
        this.columns = []
    }

    add_column(column){
        this.columns.push(column)
        column++;
    }

    remove_column(column_id){
        this.columns[this.find_column_idx(column_id)].disconnect()
        this.columns.remove(this.find_column_idx(column_id))
    }

    find_column_idx(column_id){
        return this.columns.findIndex((elem) => elem.id === column_id)
    }

    disconnect(){
        this.columns.forEach((elem) => {elem.disconnect()})
    }
}