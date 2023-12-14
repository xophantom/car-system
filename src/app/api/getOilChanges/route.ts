import { sql } from '@vercel/postgres';
import type { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('Iniciando consulta ao banco de dados'); // Log antes da consulta

  const result = await sql`SELECT * FROM oil_changes WHERE id >= 1`;

  console.log('Consulta concluída'); // Log após a consulta
  console.log('Número de linhas retornadas:', result.rowCount); // Log para mostrar o número de linhas
  console.log('Dados retornados:', result.rows); // Log para mostrar os dados retornados

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
