-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID int NOT NULL,
  username varchar(100),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  ID int NOT NULL,
  roomname varchar(100),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  ID int NOT NULL,
  text varchar(10000),
  userID int,
  roomID int,
  PRIMARY KEY (ID),
  FOREIGN KEY (roomID) REFERENCES rooms(ID),
  FOREIGN KEY (userID) REFERENCES users(ID)
);

CREATE TABLE users_rooms (
  userID int,
  roomID int,
  PRIMARY KEY(userID, roomID),
  FOREIGN KEY (roomID) REFERENCES rooms(ID),
  FOREIGN KEY (userID) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

