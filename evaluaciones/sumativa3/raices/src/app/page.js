import ListadoInscripciones from "./components/ListadoInscripciones";

export default function Home() {
  return (
    <div className="bg-grisClaro text-grisCarbon font-roboto min-h-screen">
      <header className="bg-secundario text-white text-center py-10">
        <h1 className="text-4xl font-montserrat font-bold">Raíces Digitales</h1>
        <p className="text-lg mt-2">
          Talleres Abiertos de Teatro, Danza y Pintura Creativa
        </p>
      </header>

      <section className="w-full">
        <img
          src="/arte-urbano.jpg"
          alt="Arte urbano"
          className="w-full max-h-[400px] object-cover"
        />
      </section>

      <section className="py-12 px-6 sm:px-20 bg-white">
        <h2 className="text-2xl font-montserrat text-center text-primario mb-8">
          Inscripciones Recibidas
        </h2>
        <ListadoInscripciones />
      </section>
    </div>
  );
}



