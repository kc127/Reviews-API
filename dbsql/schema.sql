CREATE DATABASE retaildb;

USE retaildb;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  review_id INT NOT NULL,
  rating TINYINT,
  summary VARCHAR(60),
  recommend BIT,
  response VARCHAR(),
  body VARCHAR(1000),
  review_date DATETIME,
  reviewer_name VARCHAR(255),
  helpfulness TINYINT,
  PRIMARY KEY (id),
  FOREIGN KEY (products_id) REFERENCES products(id)
);

CREATE TABLE photos(
  id INT NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(1000),
  PRIMARY KEY(id),
  FOREIGN KEY (reviews_id) REFERENCES reviews(id)
);

CREATE TABLE ratings_recommended (
  id INT NOT NULL AUTO_INCREMENT,
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
  id INT NOT NULL AUTO_INCREMENT,
  characteristics_name VARCHAR(255),
  characteristics_value INT,
  PRIMARY KEY(id),
  FOREIGN KEY(ratings_recommended_id) REFERENCES ratings_recommended(id),
);




