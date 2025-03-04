import { env } from 'extrass'
export default env({
  DB_URL: r.string(),
  DB_PASS: r.string(),
  JWT_SECRET: r.string(),
  BCRYPT_SALT_ROUND: r.number(),
  BCRYPT_SALT_ROUND_2: r.number(),
  OPTIONAL: r.o.string(),
})
