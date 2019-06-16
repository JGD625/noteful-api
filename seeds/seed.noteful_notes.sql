
INSERT INTO noteful_notes (id, note_name, folder_id, content, modified_date)
VALUES
  (1, 'Dogs', '1', 'lorem ipsum', '3/4/2019' ),
  (2, 'Cats', '2', 'lorem ipsum', '3/4/2019'),
  (3, 'Pigs', '2', 'lorem ipsum', '3/4/2019'),
  (4, 'Birds', '1', 'lorem ipsum', '3/4/2019'),
  (5, 'Bears', '1', 'lorem ipsum', '3/4/2019'),
  (6, 'Horses', '2','lorem ipsum', '3/4/2019'),
  (7, 'Tigers', '3', 'lorem ipsum', '3/4/2019'),
  (8, 'Wolves', '3', 'lorem ipsum', '3/4/2019'),
  (9, 'Elephants', '2', 'lorem ipsum', '3/4/2019'),
  (10, 'Lions', '1','lorem ipsum', '3/4/2019'); 

  ALTER SEQUENCE noteful_notes RESTART WITH 11; 
