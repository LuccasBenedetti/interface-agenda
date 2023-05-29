import React from 'react';

const AppointmentTable = () => {
  const appointments = [
    {
      id: 1,
      date: '31/05/2023 10:00',
      name: 'João da Silva',
      phone: '(35) 99657-9782',
      birthDate: '01/01/1983'
    },
    {
      id: 2,
      date: '31/05/2023 11:00',
      name: 'Jane Marcondes',
      phone: '(35) 99643-6153',
      birthDate: '27/09/1990'
    },
    {
      id: 3,
      date: '31/05/2023 12:00',
      name: 'Jada Smith',
      phone: '(35) 99884-1234',
      birthDate: '18/09/1971'
    },
    {
      id: 4,
      date: '31/05/2023 13:00',
      name: 'Michael Jackson',
      phone: '(35) 98874-1243',
      birthDate: '29/08/1958'
    },
    {
      id: 5,
      date: '31/05/2023 14:00',
      name: 'Winston Churchill',
      phone: '(35) 99275-1543',
      birthDate: '30/11/1874'
    },
    {
      id: 6,
      date: '31/05/2023 15:00',
      name: 'Johnny Depp',
      phone: '(35) 99110-9110',
      birthDate: '09/06/1963'
    },
    {
      id: 7,
      date: '31/05/2023 16:00',
      name: 'Jane Smith',
      phone: '(35) 99848-1234',
      birthDate: '26/05/1966'
    },
    {
      id: 8,
      date: '31/05/2023 17:00',
      name: 'Roger Guedes',
      phone: '(35) 99945-3045',
      birthDate: '02/10/1996'
    }
  ];

  return (
      <table className='table table-dark table-hover table-striped table-borderless'>
        <thead className='table-dark'>
          <tr>
            <th className='justify-content-between'><span className='fs-3'>Data do Atendimento</span></th>
            <th className='justify-content-between'><span className='fs-3'>Nome</span></th>
            <th className='justify-content-between'><span className='fs-3'>Telefone</span></th>
            <th className='justify-content-between'><span className='fs-3'>Data de Nascimento</span></th>
            <th className='justify-content-between'><span className='fs-3'>Ações</span></th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td className='justify-content-between'><span className='fs-4'>{appointment.date}</span></td>
              <td className='justify-content-between'><span className='fs-4'>{appointment.name}</span></td>
              <td className='justify-content-between'><span className='fs-4'>{appointment.phone}</span></td>
              <td className='justify-content-between'><span className='fs-4'>{appointment.birthDate}</span></td>
              <td className='justify-content-between'>
                <button className='btn btn-light btn-sm mx-2'>Editar</button>
                <button className='btn btn-light btn-sm'>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default AppointmentTable;
