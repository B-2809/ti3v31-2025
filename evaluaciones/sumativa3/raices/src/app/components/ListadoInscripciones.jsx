"use client";

import { useEffect, useState } from "react";

export default function ListadoInscripciones() {
  const [inscripciones, setInscripciones] = useState([]);
  const [talleres, setTalleres] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [inscRes, tallRes] = await Promise.all([
          fetch("https://ejemplo-firebase-657d0-default-rtdb.firebaseio.com/inscripciones.json"),
          fetch("https://ejemplo-firebase-657d0-default-rtdb.firebaseio.com/talleres.json"),
        ]);

        const [inscData, tallData] = await Promise.all([
          inscRes.json(),
          tallRes.json(),
        ]);

        // Convertir los objetos en arreglos
        const inscripcionesArray = inscData ? Object.entries(inscData).map(([id, data]) => ({ id, ...data })) : [];
        const talleresArray = tallData ? Object.entries(tallData).map(([id, data]) => ({ id, ...data })) : [];

        const inscripcionesCompletas = inscripcionesArray.map((insc) => {
          const taller = talleresArray.find((t) => t.id === insc.taller);
          return {
            ...insc,
            tallerNombre: taller?.nombre || "Taller no encontrado",
            tipo: taller?.descripcion || "Sin descripción",
            profesor: taller?.profesor || "Sin profesor",
          };
        });

        setInscripciones(inscripcionesCompletas);
        setTalleres(talleresArray);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setCargando(false);
      }
    }

    fetchData();
  }, []);

  if (cargando) {
    return <p className="text-center">Cargando inscripciones...</p>;
  }

  if (inscripciones.length === 0) {
    return <p className="text-center text-gray-500">No hay inscripciones disponibles.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {inscripciones.map((inscripcion) => (
        <div key={inscripcion.id} className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-bold text-primario">{inscripcion.nombres} {inscripcion.apellidos}</h3>
          <p className="text-sm text-grisCarbon">{inscripcion.correo}</p>
          <p className="mt-2 text-sm">
            <strong>Taller:</strong> {inscripcion.tallerNombre}
          </p>
          <p className="text-sm"><strong>Tipo:</strong> {inscripcion.tipo}</p>
          <p className="text-sm"><strong>Profesor:</strong> {inscripcion.profesor}</p>
        </div>
      ))}
    </div>
  );
}

