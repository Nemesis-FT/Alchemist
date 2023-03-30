class Column{
    constructor(id, name, type, comment) {
        this.id = id
        this.relationship = null
        this.name = null
        this.type = type
        this.comment = comment
    }

    setRelationship(relationship){
        this.relationship = relationship
    }

    removeRelationship(relationship){
        this.relationship.disconnect()
        this.relationship = null
    }

    disconnect(){
        if(this.relationship){
            this.relationship.disconnect()
        }
        return
    }
}