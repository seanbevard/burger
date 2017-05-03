/*Create and Use da burgers database*/
CREATE DATABASE  `burgers_db`;
USE `burgers_db`;


/* Drop da table if it exists.
Create a table for da burgers. */
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL,
	`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */