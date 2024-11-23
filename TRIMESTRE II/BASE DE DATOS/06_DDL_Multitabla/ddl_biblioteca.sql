-- LEFT JOIN
-- muestreme todos los libros que tengan editorial 
SELECT * FROM LIBROS
LEFT JOIN EDITORIALES
ON LIBROS.editorial_clave=EDITORIALES.editorial_clave;

-- RIGHT JOIN
-- Muestre todas las editoriales con sus libros 
SELECT * FROM LIBROS
RIGHT JOIN EDITORIALES
ON LIBROS.editorial_clave=EDITORIALES.editorial_clave;


-- alias
SELECT * FROM LIBROS AS l
RIGHT JOIN EDITORIALES AS e
ON l.editorial_clave=e.editorial_clave;


SELECT 
 e.editorial_clave,
 editorial_nombre,
 libro_clave,
 libro_titulo
 FROM LIBROS AS l
 RIGHT JOIN EDITORIALES AS e
ON l.editorial_clave=e.editorial_clave;



SELECT
l.libro_clave,
libro_titulo,
libro_idioma,
editorial_nombre,
AUTORES.autor_nombre
FROM LIBROS as l
Inner JOIN EDITORIALES AS e 
on l.editorial_clave=e.editorial_clave
INNER JOIN AUTORES
on l.libro_clave=AUTORES.libro_clave;

SELECT 
 e.editorial_clave,
 editorial_nombre,
 libro_clave,
 libro_titulo
 LIBROS AS l
 RIGHT JOIN EDITORIALES AS e
ON l.editorial_clave=e.editorial_clave;

SELECT
l.libro_clave,
libro_titulo