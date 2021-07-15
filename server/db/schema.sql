DROP DATABASE IF EXISTS quotesDB;
CREATE DATABASE quotesDB;

USE quotesDB;

CREATE TABLE quotes (
  id int NOT NULL AUTO_INCREMENT,
  quote varchar(50) NOT NULL,
  PRIMARY KEY (id)
);
-- INSERT INTO quotes (quote)
-- VALUE
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/