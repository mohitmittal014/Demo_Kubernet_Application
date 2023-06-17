# **Demo Kubernet Application**
This repository contains demo application for the Kubernetes practice. This is two tier deployment. API tier contains node.js application which is pulled from Docker hub as Image `212131/nodedemoapplicationv1:2.0` and database tier contains postgres database using `postgres:latest` image from docker hub. Source code for node.js is also attached.

## **Overall Flow**

This is a two tier web api. Backend is postgres database:
* Web API
* Database

### **Web API**
This is node js based application. For testing purpose only get api is created. In same way we can create another apis. 
Data is read from postgres database.

### **Database API**
Postgres database is used. Database is deployed in 1 pod.
1. Database Name - Employees
2. Table Name - Profile

## **Deployment**

Deployment is done using Kubernets on AWS Cloud.

### **Kubernet Components **
* Cluster

AWS Cluster is created using the command `eksctl create cluster --name DemoCluster --version 1.27 --region us-east-1 --nodegroup-name Linux-nodes --node-type t2.micro --nodes 2 --zones us-east-1a,us-east-1b,us-east-1c`

* Nodes

Two Nodes are deployed using the above commands these are linux based EC2 instances and type is t2.micro as it is free tier provided. It support maximum 4 pods.

* Pods

For this deployment we have used 2 Pods (as we are using t2.micro type), `1 pod on each node` for web api and for database tier `1 pod`.

###  **Kubernet Files Structure**

#### **Web Tier**
* web-deployment.yaml
* web-service.yaml

#### **Database Tier**
* db-persistent-volume.yaml
* db-persistent-volume-claim.yaml
* db-deployment.yaml
* db-service.yaml

### **Deployment Steps**

1. Create Cluster using above mentioned command.
1. deploy is done just deploying the flow through kustomization.yaml using command
   `kubectl apply -k kustomization.yaml`.

## **Database Creation**

As default database is postgres so after deployment we need to create ``employees`` database :

### **Steps for Database setup**

1. Run ``kubectl exec -it postgresdb bash`` command, we will be enter as root user.
2. ``psql -U postgres`` - swtich to user ``postgres``
3. use ``\l`` to see all available databases.
4. Run ``Create database employees;`` command to create database.
5. Swtich to database using ``/c employees``.
6. Now create table ``CREATE TABLE Profile(Id integer primary key, Name varchar, EmailId varchar, City varchar);``.
8. INSERT INTO PROFILE(Id, Name, EmailId, City) VALUES (1, 'Divya', 'test2@gmail.com', 'Faridabad'), (1, 'Ankit', 'test3@gmail.com', 'GBN');
9. check data from select query.

### **Sample API Deployed**

Validate the demo using following URL [GetEmployee](http://af8960eb776c14f12aea78899a4364b3-1968178488.us-east-1.elb.amazonaws.com:5000/api/v1/employees)
 




