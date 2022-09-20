import { MagnifyingGlassPlus } from 'phosphor-react';
import { GameBanner } from './components/GameBanner';

import './styles/main.css';

import logoImg from './assets/img/logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
       <GameBanner  bannerUrl="/game1.png" title="League of Legends" adsCount={5}/>
       <GameBanner  bannerUrl="/game2.png" title="Apex Legends" adsCount={5}/>
       <GameBanner  bannerUrl="/game3.png" title="Counter-Strike" adsCount={5}/>
       <GameBanner  bannerUrl="/game4.png" title="World of Warcraft" adsCount={5}/>
       <GameBanner  bannerUrl="/game5.png" title="Dota 2" adsCount={5}/>
       <GameBanner  bannerUrl="/game6.png" title="Fortnite" adsCount={5}/>

      </div>
      <CreateAdBanner />
    </div>
  )
}

export default App
