import React from 'react';
// import { useMemo } from 'react';
// import { useState } from 'react';
import './styles.css';

// const frutas = [
//     'um',
//     'dois',
//     'três',
//     'quatro',
//     'cinco',
//     'seis'
// ];

export default function SearchBar() {
//   const [busca, setBusca] = useState('');
  
//   const itemFiltrados = useMemo(() => {
//     const lowerPesquisa = busca.toLowerCase();
//     return NumeroArray.filter((fruta) => 
//     fruta.toLowerCase().includes(lowerPesquisa)
//   );
// }, [busca]);

  return (
    <div className='search-bar'>
        <input type="text" />
    </div>
        
//  <div className='container-search-bar'>
//         <input type="text"
//         value={busca}
//         onChange={(e) => setBusca(e.target.value)} 
//         />
//         <ul>
//             {itemFiltrados.map((fruta) => (
//                 <li key={fruta}>{fruta}</li>
//             ))}            
//         </ul>
//     </div>

  );
}

