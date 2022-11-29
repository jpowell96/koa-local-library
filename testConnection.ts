import { ClientBase, Client, Pool, PoolConfig } from "pg"


 
// pools will use environment variables
// for connection information
const poolConfig : PoolConfig = {
  user: "",
  database: "",
  password: "",
  host: "",
  port: 9999,
}
const pool : Pool = new Pool(poolConfig);
pool.on('connect', (client) => {
  console.log("Successfully connected to the db");

})
 
pool.query('select * FROM film limit 5;', (err, res) => {
  console.log(err, res)
  pool.end()
});