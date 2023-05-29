import React from 'react';


const TopBar = () => {
  return (
    <div className="topbar">
      <h1 className="display-1 mt-5">Super Agenda Semanal</h1>
      <nav className="topbar-navigation mt-5">
        <div className='btn-group btn-group-lg' role='group'>
            <button type='button' className='btn btn-light btn-color'>Semana Anterior</button>
            <button type='button' className='btn btn-light btn-color active'>28/05/23 a 04/06/23</button>
            <button type='button' className='btn btn-light btn-color'>Próxima Semana</button>
        </div>
      </nav>
      <h2 className='display-4 d-flex justify-content-center mt-5'>Lista de Atendimento:</h2>
    </div>
  );
};

export default TopBar;
