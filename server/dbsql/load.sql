-- USE retaildb;

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/product.csv' INTO TABLE product IGNORE 1 LINES (product_id);

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/dataClean/reviews_clean.csv' INTO TABLE reviews FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id,product_id,rating,review_date,summary,body,@var1,@var2,reviewer_name,reviewer_email,response,helpfulness) SET recommend=IF(@var1="true",1,0), reported=IF(@var2="true",1,0);

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/dataClean/photos_clean.csv' INTO TABLE photos FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id, reviews_id, photo_url);

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/characteristics.csv' INTO TABLE characteristics FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS(id, @dummy, characteristics_name);

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/characteristics.csv' INTO TABLE characteristics_product
-- FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS
-- (@col1,@col2, @dummy) set id=@col1,characteristics_id=@col1,product_id=@col2;

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/characteristic_reviews.csv' INTO TABLE characteristics_reviews FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (@col1,@col2,@col3, @col4) SET id=@col1, characteristics_id=@col2, reviews_id=@col3, characteristics_value=@col4;

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/characteristic_reviews.csv' INTO TABLE characteristics_reviews FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;