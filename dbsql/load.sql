-- USE retaildb;

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/product.csv' INTO TABLE product IGNORE 1 LINES (product_id);

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/reviews.csv' INTO TABLE reviews FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id,product_id,rating,review_date,summary,body,@var1,@var2,reviewer_name,reviewer_email,response,helpfulness) SET recommend=IF(@var1="true",1,0), reported=IF(@var2="true",1,0);

-- LOAD DATA LOCAL INFILE '/Users/kanchanchauhan/Documents/sei/sdc/Reviews/data/reviews_photos.csv' INTO TABLE photos FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id, reviews_id, photo_url);






