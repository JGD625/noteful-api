create table noteful_notes (
    id int primary key generated by default as identity,
    notes_name text not null,
    content text,
    folder_id int references noteful_folders(id) on delete cascade not null
)