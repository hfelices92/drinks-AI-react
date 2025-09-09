import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const { favorites } = useAppStore();
  return (
    <>
      <h1 className="text-5xl font-bold ">Tus Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {favorites.length !== 0 ? (
          <>
            {favorites.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </>
        ) : (
          <p className="my-10 text-center text-2xl">
            No hay recetas disponibles en favoritos. Agrega algunas desde la
            página principal.
          </p>
        )}
      </div>
    </>
  );
}
