select Persona.nombre 
    from Persona, Matricula, Asignatura 
        where Asignatura.nombre="Programacion" and Matricula.codigo=Asignatura.codigo and Matricula.dni=Persona.dni;