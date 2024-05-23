"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const PokemonPage = () => {
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const data = await response.json();
    const array = await data.results;
    return array;
  };

  const getPokemonFormatted = async () => {
    const pokemonList: any = await getPokemon();
    const finalData: any = [];
    pokemonList.forEach(async (element: any) => {
      const specificResponse: any = await fetch(element.url);
      const specificData: any = await specificResponse.json();
      specificData.name = element.name;
      finalData.push(specificData);
    });
    setPokemon(finalData);
  };

  useEffect(() => {
    getPokemonFormatted();
  }, []);

  useEffect(() => {
    pokemon.sort((a: any, b: any) => a.id - b.id);
  }, [pokemon]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search for Pokemon"
        className="input input-bordered w-full max-w-xs mt-4"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul
        role="list"
        className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-12 px-12"
      >
        {pokemon.map((poke: any) => (
          <li key={poke.name} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={poke.sprites.other["official-artwork"].front_default}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
            </div>
            <span className="pointer-events-none mt-2 block truncate text-sm font-medium text-white">
              {poke.name}
            </span>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-white">
              {poke.order}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonPage;
