function makeNotesArray() {
    return [
        {
            id: 1,
            name: 'First Note',
            folder_id: 1,
            content: 'This is the first note, tis a good note.',
            modified_date: '2020-01-22'
        },
        {
            id: 2,
            name: 'Second Note',
            folder_id: 2,
            content: 'This is the second note, also a grand ole note.',
            modified_date: '2020-01-22'
        }
    ]
}

module.exports = {
    makeNotesArray
}
