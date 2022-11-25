CREATE EXTENSION IF NOT EXISTS "uuid_ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (uuid)
);
INSERT INTO application_user (username, email, password)
VALUES (
        'Vinicius',
        'punhocage@gmail.com',
        crypt('admin', 'my_salt')
    );