DROP TABLE Medidas;
create table Medidas (
    id INTEGER PRIMARY KEY,
    tipoMedida char(20) not null,
    medida char(9) not null,
    fecha varchar(20) not null
    );
