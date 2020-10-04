import React, { useState, useEffect } from "react";
import pokeapi from "../../services/pokeapi";

import "./styles.css";
import Button from "../Button";

interface Data {
  results: Array<Object>;
  previous: string | null;
  next: string | null;
  url: string;
}

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<Object>>([]);
  const [previous, setPrevious] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    pokeapi.get<Data>(url).then((response) => {
      const pokenames = response.data;
      setPokemons(pokenames.results);
      setPrevious(pokenames.previous);
      setNext(pokenames.next);
    });
  }, [url]);

  function handleNextClick() {
    if (next != null) {
      setUrl(next);
    } else {
      return;
    }
  }

  function handlePreviousClick() {
    if (previous != null) {
      setUrl(previous);
    } else {
      return;
    }
  }

  return (
    <main id="#main">
      <ul className="pokemonlist">
        {pokemons.map((pokemon: any, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <footer id="main-footer">
        <Button
          href={previous}
          label="Previous"
          onClick={() => handlePreviousClick}
        />
        <Button href={next} label="Next" onClick={() => handleNextClick} />
      </footer>
    </main>
  );
};

export default Main;
