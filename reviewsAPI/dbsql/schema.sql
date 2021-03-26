DROP DATABASE IF EXISTS retaildb;

CREATE DATABASE retaildb;

USE retaildb;

CREATE TABLE product (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id INT UNSIGNED NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE reviews (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id INT UNSIGNED NOT NULL,
  rating TINYINT NOT NULL,
  review_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  summary VARCHAR(60),
  body VARCHAR(1000),
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  reviewer_name VARCHAR(255),
  reviewer_email VARCHAR(255),
  response VARCHAR(1000),
  helpfulness TINYINT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);


CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  reviews_id INT UNSIGNED NOT NULL,
  photo_url TEXT(1000),
  PRIMARY KEY(id),
  FOREIGN KEY (reviews_id) REFERENCES reviews(id)
);


CREATE TABLE characteristics (
  id INT NOT NULL AUTO_INCREMENT,
  characteristics_name VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE characteristics_product (
  id INT NOT NULL AUTO_INCREMENT,
  characteristics_id INT NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(characteristics_id) REFERENCES characteristics(id),
  FOREIGN KEY(product_id) REFERENCES product(id)
);

CREATE TABLE characteristics_reviews (
  id INT NOT NULL AUTO_INCREMENT,
  characteristics_id INT NOT NULL,
  reviews_id INT UNSIGNED NOT NULL,
  characteristics_value INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(characteristics_id) REFERENCES characteristics(id),
  FOREIGN KEY(reviews_id) REFERENCES reviews(id)
);

-- SET FOREIGN KEY CHECKS = 0;



