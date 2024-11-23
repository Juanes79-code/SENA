-- C:\xampp\mysql\bin>mysql -h localhost -u root -p
SHOW DATABASES;
-- crear base de datos
create databases db_biblioteca;
-- eliminar base de datos
drop database db_biblioteca
-- usar la base de datos 
USE db_biblioteca;
-- mostrar tablas
SHOW tables;
-- mostrar las columnas, tipo de datos, tamño,tc
show columns from editoriales;
describe editoriales;
-- insertar datos 
INSERT INTO AUTORES (autor_nombre) VALUES
('Gabriel 1'),
('Gabriel 1'),
('Gabriel 1'),
('Gabriel 1'),
('Gabriel 1');


-- insertar datos 
INSERT INTO SOCIOS (autor_nombre) VALUES
( 'Gabriel 1');
('Gabriel 2');
('Gabriel 3');
('Gabriel 4');
('Gabriel 5');

-- actualizar autores 
UPDATE AUTORES SET
autor_nombre = 'pedro';

-- Insertar socios
INSERT INTO SOCIOS (autor_nombre) VALUES
( null,'Gabriel 1','direccion1','a','311'),
(null,'Gabriel 2','direccion2','b','312'),
(null,'Gabriel 3','direccion3','c','313'),
(null,'Gabriel 4','direccion4','d','314'),
(null,'Gabriel 5','direccion5','j','315');


-- ELIMINAR 
DELETE from AUTORES
WHERE autor_clave = 0;

-- consultar
SELECT * FROM AUTORES

-- SELECCION ESPECCIFICA
SELECT socio_nombre, socio_telefono FROM SOCIOS;


SELECT socio_nombre, socio_direccion, socio_telefono FROM SOCIOS
WHERE socio_categoria =5;

INSERT INTO EDITORIALES VALUES
(NULL,'NORMA','CL 45 #45-45','3112132016'),
(NULL,'Panamericana','Kr 45 # 67-13','3112531749'),
(NULL,'Mundo','CL 45','3105748516');


INSERT INTO LIBROS VALUES
(NULL,'1','Harry Potter ','ESPAÑOL','JUVENIL','PDF'),
(NULL,'1','SATANAS','ESPAÑOL','INFANTIL','IMPRESO'),
(NULL,'2','LA CABAÑA','ESPAÑOL','INFANTIL','IMPRESO');


INSERT INTO AUTORES VALUES
(NULL,'Mario Mendoza'),
(NULL,'Gabriel GArcia Marquez'),
(NULL,'Jesus Ramirez');

