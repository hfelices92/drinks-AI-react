import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const location = useLocation();
  const { fetchCategories, categories , searchRecipes, showNotification } = useAppStore();
  const isHomePage = useMemo(() => {
    return location.pathname === "/";
  }, [location]);

  const [searchFilter, setSetsearchFilter] = useState({
    ingredient: "",
    category: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSetsearchFilter({
      ...searchFilter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(searchFilter).some((val) => String(val).trim() === "")
    ) {
      showNotification({text: "Todos los campos son obligatorios", error: true});
      return;
    }
      

    searchRecipes(searchFilter);

  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <header
      className={isHomePage ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      
      <div className="mx-auto container px-5 py-16 ">
        {/* NAV */}
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
            >
              Favoritos
            </NavLink>
            <NavLink
              to="/ai"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
            >
              Generar con IA
            </NavLink>
          </nav>
        </div>
        {isHomePage && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Ingredient */}

            <div className="space-y-4 ">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                placeholder="Buscar por nombre o ingredientes"
                value={searchFilter.ingredient}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div className="space-y-4 ">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>

              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                value={searchFilter.category}
                onChange={handleChange}
              >
                <option value="">-- Selecciona la Categoría --</option>
                {categories.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recetas"
              className="bg-orange-800 w-full p-2 text-white font-extrabold uppercase rounded-lg hover:bg-orange-900 cursor-pointer "
            />
          </form>
        )}
      </div>
    </header>
  );
}
