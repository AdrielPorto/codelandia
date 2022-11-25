import db from "../db";
import User from "../models/user.model";
import DatabaseError from "../models/errors/database.error.model";

class UserRepository {
  async findAllUsers(): Promise<User[]> {

    const query = `
      SELECT uuid, username, email
      FROM application_user
      `;
    const { rows } = await db.query<User>(query);
    return rows || [];
  }

  async findById(uuid: string): Promise<User> {

    try {
      const query = `
        SELECT uuid, username, email
        FROM application_user
        WHERE uuid = $1
    `;
      const values = [uuid];
      const { rows } = await db.query<User>(query, values);
      const [user] = rows;
      return user;
    } catch (error) {
      throw new DatabaseError("Error na consulta por id", error);
    }
  }

  async create(user: User): Promise<string> {
    const script = `
      INSERT INTO application_user (
        username,
        email,
        password
      )
      VALUES ($1, $2, crypt($3, 'my_salt'))
      RETURNING uuid
      `;
    const values = [user.username, user.email, user.password];
    const { rows } = await db.query<{ uuid: string }>(script, values);
    const [newuser] = rows
    return newuser.uuid
  }

  async update(user: User): Promise<void> {
    const script = `
      UPDATE application_user
      SET
        username = $1,
        email = $2,
        password = crypt($3, 'my_salt')
      WHERE uuid = $4
      `;
    const values = [user.username, user.password, user.uuid];
    await db.query(script, values);
  }
  async remove(uuid: string): Promise<void> {
    const script = `
      DELETE
      FROM application_user
      WHERE uuid = $1
      `;
    const values = [uuid];
    await db.query(script, values);

  }
  async findByEmail(email: string): Promise<User | null> {
    try {
      const query = `
      SELECT uuid, username
      FROM application_user
      WHERE email = $1
      `
      const values = [email];


      const { rows } = await db.query<User>(query, values);
      const [user] = rows;
      return !user ? null : user; //OU user || null
    } catch (error) {
      throw new DatabaseError('Erro na consulta por usuário email', error);
    }
  }

  async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
    try {
      const query = `
      SELECT uuid, username
      FROM application_user
      WHERE username = $1
      AND password = crypt($2, 'my_salt')
      `
      const values = [username, password];

      const { rows } = await db.query<User>(query, values);
      const [user] = rows;
      return !user ? null : user; //OU user || null
    } catch (error) {
      throw new DatabaseError('Erro na consulta por usuário username and password', error);
    }
  }
}


export default new UserRepository();