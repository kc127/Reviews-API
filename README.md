## Reviews API

![GitHub last commit](https://img.shields.io/github/last-commit/kc127/reviews-api)


### About
Reviews API is the back end infrastructure for the front end application of an e-commerce website, *Fashion House* with primary focus on system design and scaling.

<img src="./readme/diagram.png" alt="drawing" width="300"/>

### Tech Stack
* Reviews Microservice was primarily built using Node/Express with MySQL for database.
* NGINX load balancer
* Amazon Web Services for Deployment
* k6, loader.io integrated with New Relic


### Project Overview
* Design, analyze multiple DBMS options using MongoDB and MySQL and choose one
* Extract, Transform and Load application data into MySQL
    * 1 MM Product Ids
    * 5 MM Review Ids
    * 2 MM Photos
    * 20 MM Characteristics Meta Data
* Design and Implement Service Logic
* Optimize the system by analyzing query times and server responses
* Deploy Client + API hub + Reviews API to AWS
* Stress test the system in dev, prod
* Measure, improve the performance of the system at scale
* Scale the app's architecture to support loads up to 1000 RPS

### Main Goals
1. To achieve response time (latency) of < 2000 ms under load
2. To achieve throughput of 1000 RPS on EC2
3. To get error rate < 1% under load