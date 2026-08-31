import { Pool } from 'pg'

let pool: Pool | undefined

// Legge process.env direttamente, non runtimeConfig. Motivo: i default di
// runtimeConfig in nuxt.config.ts vengono risolti a build time, e il Dockerfile
// della repo non passa nessun build arg, quindi in produzione resterebbero
// vuoti. A runtime Nitro li sovrascrive solo da variabili con prefisso NUXT_.
// Leggendo process.env qui, il nome della variabile su Coolify è quello che
// conta, e accettiamo entrambe le forme per non dipendere dalla convenzione.
export function getDb(): Pool {
  if (!pool) {
    const connectionString = process.env.NUXT_DATABASE_URL || process.env.DATABASE_URL
    if (!connectionString) {
      throw new Error('Connection string Postgres non configurata')
    }
    pool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    })
  }
  return pool
}
