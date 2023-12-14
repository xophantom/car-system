'use client';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';

type OilChange = {
  id: number;
  last_oil_change_km: number;
  next_oil_change_km: number;
};

const OilControl = () => {
  const [lastOilChangeKm, setLastOilChangeKm] = useState('');
  const [nextOilChangeKm, setNextOilChangeKm] = useState(null);
  const [history, setHistory] = useState<OilChange[]>([]);

  useEffect(() => {
    fetch('/api/getOilChanges')
      .then((response) => response.json())
      .then((data) => {
        setHistory(data.rows);
      });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/oilchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lastOilChangeKm: Number(lastOilChangeKm) }),
    });

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    setNextOilChangeKm(data.nextOilChangeKm);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-4">
        <h1>Controle de Óleo</h1>

        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            value={lastOilChangeKm}
            onChange={(e) => setLastOilChangeKm(e.target.value)}
            placeholder="Kilometragem na última troca de óleo"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white border border-blue-700 rounded mt-4"
            type="submit"
          >
            Calcular
          </button>
        </form>

        <div className="mt-4 mb-4">
          {nextOilChangeKm && (
            <p>Próxima troca de óleo em {nextOilChangeKm} km</p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2>Histórico de Cálculos</h2>
        {history.map((item) => (
          <div key={item.id}>
            Última troca: {item.last_oil_change_km} km, Próxima troca:
            {item.next_oil_change_km} km
          </div>
        ))}
      </div>
    </>
  );
};

export default OilControl;
