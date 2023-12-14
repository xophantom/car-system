import { sql } from '@vercel/postgres';

export async function saveOilChange(
  lastOilChangeKm: any,
  nextOilChangeKm: any,
) {
  await sql`
    INSERT INTO oil_changes (last_oil_change_km, next_oil_change_km) 
    VALUES (${lastOilChangeKm}, ${nextOilChangeKm})
  `;
}
