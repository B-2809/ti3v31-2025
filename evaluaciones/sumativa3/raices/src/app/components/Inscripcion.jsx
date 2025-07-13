import Taller from "./Taller";

export default function Inscripcion({ datos, taller }) {
  return (
    <div className="border rounded p-4 shadow bg-white mb-4">
      <p className="font-bold text-lg">{datos.nombres} {datos.apellidos}</p>
      <p className="text-sm text-gray-600">{datos.correo}</p>
      <Taller taller={taller} />
    </div>
  );
}
