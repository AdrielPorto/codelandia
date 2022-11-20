import { Pool } from "pg";

const connectionString = 'postgres://tirvanij:7R-3U9mu7Nn808F-PfT7cue-8_umYvYo@peanut.db.elephantsql.com/tirvanij';

const db = new Pool({ connectionString });

export default db;

// Só isso que tem que fazer para conectar o banco de dados