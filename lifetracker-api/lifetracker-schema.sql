CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    TEXT NOT NULL,
    password    TEXT NOT NULL,
    firstname   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    lastname    TEXT NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE nutrition (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    category    TEXT NOT NULL,
    quantity    INTEGER NOT NULL,
    calories    INTEGER NOT NULL,
    image_url   TEXT NOT NULL,
    user_id     INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- CREATE TABLE sleep (
--     post_id     SERIAL PRIMARY KEY,
--     user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,
--     created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
--     start_time  TIMESTAMP NOT NULL,
--     end_time    TIMESTAMP NOT NULL
-- );