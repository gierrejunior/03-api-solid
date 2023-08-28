import 'dotenv'
import { z } from 'zod'

// Regra a ser seguida
const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333), // z.coerce.number() = usado para tentar converter um valor em um número, se possível.
})

// Validação
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  // se não passou na validação, da a mensagem de erro, e usa o throw q impede de continaur processando, e isso derruba aaplicação
  console.error('❌Invalid enviroment variables', _env.error.format())

  throw new Error('invalid environment variables.')
}

// Passando epla validação ele exporta as variaveis para ser usadas na aplicação
export const env = _env.data
