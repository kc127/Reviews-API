-- DROP DATABASE IF EXISTS retaildb;

-- CREATE DATABASE retaildb;

USE retaildb;

-- CREATE TABLE IF NOT EXISTS product (
--   id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--   product_id INT UNSIGNED NOT NULL,
--   PRIMARY KEY(id)
-- );

-- id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness


CREATE TABLE reviews (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  product_id INT UNSIGNED NOT NULL,
  rating TINYINT NOT NULL,
  review_date DATETIME NOT NULL,
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


CREATE TABLE photos(
  id INT NOT NULL AUTO_INCREMENT,
  reviews_id INT UNSIGNED NOT NULL,
  photo_url VARCHAR(1000),
  PRIMARY KEY(id),
  FOREIGN KEY (reviews_id) REFERENCES reviews(id)
);

CREATE TABLE characteristics (
  id INT NOT NULL AUTO_INCREMENT,
  characteristics_name VARCHAR(255),
  characteristics_value INT,
  PRIMARY KEY(id)
);

-- CREATE TABLE ratings_recommended (
--   id INT NOT NULL AUTO_INCREMENT,
--   reviews_id INT,
--   ratings_0 TINYINT,
--   ratings_1 TINYINT,
--   ratings_2 TINYINT,
--   ratings_3 TINYINT,
--   recommended_true INT,
--   recommended_false INT,
--   PRIMARY KEY(id),
--   FOREIGN KEY (reviews_id) REFERENCES reviews(id)
-- );



-- CREATE TABLE characteristics_products(
--   id INT AUTO_INCREMENT,
--   characteristics_id INT,
--   products_id INT,
--   PRIMARY KEY(id),
--   FOREIGN KEY(characteristics_id) REFERENCES characteristics(id),
--   FOREIGN KEY(products_id) REFERENCES products(id)
-- )

-- CREATE TABLE characteristics_reviews(
--   id INT AUTO_INCREMENT,
--   characteristics_id INT,
--   reviews_id INT,
--   PRIMARY KEY(id),
--   FOREIGN KEY(characteristics_id) REFERENCES characteristics(id),
--   FOREIGN KEY(reviews_id) REFERENCES reviews(id)
-- )


