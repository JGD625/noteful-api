function makeTestNotes() {
  return [
      {notes_name: 'How to Dance With Dogs',
      id: 1,
      content: 'Watch out for their paws.',
      modified: "2019-03-17T21:22:26.221Z",
      folder_id: 1
      },
      {notes_name: 'How to Dance With Cats',
      id: 2,
      content: 'They are wallflowers.',
      modified: "2019-03-17T21:22:26.221Z",
      folder_id: 2
      },
      {notes_name: 'Up is down',
      id: 3,
      content: 'Down is up',
      modified: "2019-03-17T21:22:26.221Z",
      folder_id: 3
      },
      {notes_name: 'Left is right',
      id: 4,
      content: 'Right is left',
      modified: "2019-03-17T21:22:26.221Z",
      folder_id: 1
      },
      {notes_name: 'Who are you?',
      id: 5,
      content: 'Who who?',
      modified: "2019-03-17T21:22:26.221Z",
      folder_id: 3
      },
  ]
}

function newNoteTest() {
  return {
  notes_name: 'My dog is Po',
  content: 'Because she is a po, po little dog.',
  folder_id: 3
  }
}

function updateNote() {
  return {
      notes_name: 'Update name',
      content: 'Updated content',
  }
}

function expectedUpdateNote() {
  return {
      notes_name: 'Update name',
      content: 'Updated content',
      modified: "2019-03-17T21:22:26.221Z",
      folder_id: 2,
      id: 2
  }
}

module.exports = {makeTestNotes, newNoteTest, updateNote, expectedUpdateNote}
