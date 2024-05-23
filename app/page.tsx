import Link from "next/link";
import HeroBackground from "../public/pikachu-background.jpeg";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroBackground.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-20 bg-gradient-to-b-grey"></div>
      <div className="hero-content justify-start text-neutral-content h-full w-full drop-shadow-2xl">
        <div className="max-w-md text-white flex flex-col items-start justify-evenly h-full">
          <h1 className="mb-5 text-5xl py-5 font-extrabold">
            Welcome to the Ultimate Pokédex!
          </h1>
          <p className="mb-4 text-md">
            Discover, explore, and learn about all your favorite Pokémon in one
            place. Whether you're a seasoned trainer or just starting your
            journey, our comprehensive Pokédex has everything you need to become
            a Pokémon master.
          </p>
          <ul className="text-md list-disc">
            <li className="my-2">
              <strong>Search and Discover:</strong> Find detailed information on
              every Pokémon, from Bulbasaur to the latest generations.
            </li>
            <li>
              <strong>Stats and Evolutions:</strong> Get in-depth data on stats,
              evolutions, and abilities.
            </li>
            <li>
              <strong>Moves and Types:</strong> Explore each Pokémon’s move
              sets, strengths, and weaknesses.
            </li>
          </ul>
          <Link
          href="/pokemon"
          >
            <button className="btn btn-primary mt-2 bg-indigo-600 text-white">Start Your Adventure Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
