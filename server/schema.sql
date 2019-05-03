DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) /*NOT NULL UNIQUE*/
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) /*NOT NULL UNIQUE*/
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  user VARCHAR(255) NOT NULL,
  room VARCHAR(255) NOT NULL
  /*user_id INT NOT NULL,
  room_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (room_id)
    REFERENCES rooms(id)*/
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

