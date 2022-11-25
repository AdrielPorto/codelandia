import { Pool } from "pg";

const connectionString = 'postgres://jmkmvyxt:y3Wt6bgb1SC1h20z3M18YC4do_25FoQf@babar.db.elephantsql.com/jmkmvyxt';

const db = new Pool({ connectionString });

export default db;

// Só isso que tem que fazer para conectar o banco de dados
