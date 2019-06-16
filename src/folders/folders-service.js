const foldersService = {
    //getall
    getAllFolders(knex) {
        return knex.select('*').from('folders')
    },
    //insert
    insertFolder(knex, newFolder) {
        return knex
          .insert(newFolder)
          .into('folders')
          .returning('*')
          .then(rows => {
              return rows[0]
          })
    },
    //getById
    getById(knex, id) {
        return knex 
          .from('folders')
          .select('*')
          .where('id', id)
          .first()
    },
    //delete
    deleteFolder(knex, id) {
        return knex('folders')
          .where({ id })
          .delete()
    },
    //update
    updateFolder(knex, id, newFolderFields) {
        return knex('folders')
          .where({ id })
          .update(newFolderFields)
    }
}
module.exports = foldersService
