CREATE DATABASE `AMP`;
USE `AMP`;
CREATE TABLE IF NOT EXISTS `ROLES` (
  `id` int(4) NOT NULL auto_increment,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ;

USE `AMP`;
INSERT INTO roles(name) VALUES('ROLE_OWNER');
INSERT INTO roles(name) VALUES('ROLE_PASSENGER');

USE `AMP`;
CREATE TABLE IF NOT EXISTS `USERS` (
  `id` bigint(4) NOT NULL auto_increment,
  `email` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL,
  `username` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY(`username`),
  UNIQUE KEY(`email`)
) ;

CREATE TABLE IF NOT EXISTS `USER_ROLES`(
`user_id` bigint NOT NULL,
`role_id` int NOT NULL,
PRIMARY KEY (`user_id`, `role_id`),
KEY (`role_id`),
CONSTRAINT FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
CONSTRAINT FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
)

