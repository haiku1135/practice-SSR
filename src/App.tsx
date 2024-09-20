// useEffect をインポート
import { useState } from 'react';
import PokemonThumbnails from './components/PokemonThumbnails';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
  iconImage: string;
}

function App() {

  const [searchName, setSearchName] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon>();


  const createPokemonObject = (searchName: string) => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${searchName}`;
    fetch(pokemonUrl)
    .then(res => res.json())
    .then(data => {
      const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
        type: data.types[0].type.name,
        iconImage: data.sprites.front_default,
      }
      setPokemon(pokemon);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPokemonObject(searchName);
  };

  return (
    <div className="app-container">
      <h1 className='text-2xl font-bold text-center text-blue-500 mt-6 mb-6'>ポケモン検索アプリ</h1>
      <div className='flex flex-col items-center justify-center'>
        <form action="" onSubmit={handleSubmit} className='flex flex-row items-center justify-between w-auto gap-2'>
          <input type="text" placeholder='ポケモンの名前を入力してください' className='border-2 w-80 border-gray-300 rounded-md p-2' value={searchName} onChange={(e) => setSearchName(e.target.value)} />
          <button type='submit' className='bg-blue-500 text-white rounded-md p-2'>検索</button>
        </form>
      </div>
      {pokemon && (
        <PokemonThumbnails id={pokemon.id} name={pokemon.name} image={pokemon.image} type={pokemon.type} iconImage={pokemon.iconImage} />
      )}
    </div>
  );
}

export default App;
