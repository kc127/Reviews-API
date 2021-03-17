DROP DATABASE IF EXISTS retaildb;

CREATE DATABASE retaildb;

USE retaildb;

CREATE TABLE reviews (
  id INT AUTO_INCREMENT,
  product_id INT NOT NULL,
  review_id INT NOT NULL,
  rating TINYINT,
  summary VARCHAR(60),
  recommend BIT,
  response VARCHAR(1000),
  body VARCHAR(1000),
  review_date DATETIME,
  reviewer_name VARCHAR(255),
  helpfulness TINYINT,
  PRIMARY KEY(id)
);

-- CREATE TABLE reviews (id INT AUTO_INCREMENT
--   -- product_id INT NOT NULL,
--   -- review_id INT NOT NULL,
--   -- rating TINYINT,
--   -- summary VARCHAR(60),
--   -- recommend BIT,
--   -- response VARCHAR(1000),
--   -- body VARCHAR(1000),
--   -- review_date DATETIME,
--   -- reviewer_name VARCHAR(255),
--   -- helpfulness TINYINT,
--   PRIMARY KEY (id),
--   -- FOREIGN KEY (products_id) REFERENCES products(id)
-- );

CREATE TABLE photos(
  id INT NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(1000),
  reviews_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (reviews_id) REFERENCES reviews(id)
);

CREATE TABLE ratings_recommended (
  id INT NOT NULL AUTO_INCREMENT,
  reviews_id INT,
  ratings_0 TINYINT,
  ratings_1 TINYINT,
  ratings_2 TINYINT,
  ratings_3 TINYINT,
  recommended_true INT,
  recommended_false INT,
  PRIMARY KEY(id),
  FOREIGN KEY (reviews_id) REFERENCES reviews(id)
);

CREATE TABLE characteristics (
  id INT AUTO_INCREMENT,
  characteristics_name VARCHAR(255),
  characteristics_value INT,
  PRIMARY KEY(id)
);

CREATE TABLE characteristics_products(
  id INT AUTO_INCREMENT,
  characteristics_id INT,
  products_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(characteristics_id) REFERENCES characteristics(id),
  FOREIGN KEY(products_id) REFERENCES products(id)
)

CREATE TABLE characteristics_reviews(
  id INT AUTO_INCREMENT,
  characteristics_id INT,
  reviews_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(characteristics_id) REFERENCES characteristics(id),
  FOREIGN KEY(reviews_id) REFERENCES reviews(id)
)


