USE retaildb;

LOAD DATA LOCAL INFILE '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/product.csv' INTO TABLE product IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/reviews_clean.csv' INTO TABLE reviews FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id,product_id,rating,review_date,summary,body,@var1,@var2,reviewer_name,reviewer_email,response,helpfulness) SET recommend=IF(@var1="true",1,0), reported=IF(@var2="true",1,0);

LOAD DATA LOCAL INFILE '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/photos_clean.csv' INTO TABLE photos FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id, reviews_id, photo_url);

-- LOAD DATA FROM S3 '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/characteristics.csv' INTO TABLE characteristics FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS(id, @dummy, characteristics_name);

LOAD DATA LOCAL INFILE '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/characteristics.csv' INTO TABLE characteristics FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS(id, @dummy, characteristics_name);

LOAD DATA LOCAL INFILE '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/characteristics.csv' INTO TABLE characteristics_product
FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS
(@col1,@col2, @dummy) set id=@col1,characteristics_id=@col1,product_id=@col2;

LOAD DATA LOCAL INFILE '/home/ubuntu/Reviews-API/reviewsAPI/dbsql/datas3/characteristic_reviews.csv' INTO TABLE characteristics_reviews FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;