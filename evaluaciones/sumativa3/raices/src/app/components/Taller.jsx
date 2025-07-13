export default function Taller({ taller }) {
    return (
      <div className="text-sm text-gray-700 mt-2">
        <p className="font-semibold">{taller.nombre}</p>
        <p className="italic text-gray-500">{taller.profesor}</p>
      </div>
    );
  }
  