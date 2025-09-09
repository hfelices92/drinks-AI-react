import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const { drinks } = useAppStore();

  const hasDrinks = useMemo(() => {
    return drinks.length > 0;
  }, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {hasDrinks ? (
          <>
            {drinks.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </>
        ) : (
          <p className="my-10 text-center text-2xl">
            No hay recetas disponibles. Utiliza el formulario para buscar
            recetas.
          </p>
        )}
      </div>
    </>
  );
}
