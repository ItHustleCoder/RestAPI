CREATE DATABASE restAPI;

CREATE TABLE `restAPI`.`recipes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `ingredients` TEXT('long') NOT NULL,
  `image` TEXT('long') NULL,
  PRIMARY KEY (`id`));
