## Part 1: Networking and Security
  ### Steps to create VPC in three tier
> The architecture includes an Amazon Virtual Private Cloud (VPC), Load Balancer (LB), Auto Scaling Group, and a Relational Database(RDS).
> Below is the VPC architecture. Steps to create VPC are mentioned below:
> ![image](https://github.com/Adeete6/assessment/assets/155286861/4d2fff7f-611e-4d38-9b56-75f179f742d8)

> 1. Create a VPC
> ![Alt text](image.png)

> 2. Create Six Subnets
> ![image](https://github.com/Adeete6/assessment/assets/155286861/77915335-a841-4a8d-bb0e-41a5bff9e648)

> 3. Create Internet Gateway
> 
> 4. Create Route table 
> ![Alt text](image-2.png)

> 5. Create a NAT Gateway
> ![image](https://github.com/Adeete6/assessment/assets/155286861/a34901e8-c77b-4e4e-9240-dfadbf31df6d)
>
> 6. Create Three NACLs and Associate Them with Subnets
> ![Alt text](image-1.png)

## Part 2: Database Deployment
### An RDS (Relational Database Service) instance to store and manage the application's data.
> Create Subnet DB group and Multi AZ DB
> 
> <img width="781" alt="image" src="https://github.com/Adeete6/assessment/assets/155286861/1025885a-a061-456c-9bf2-2568ee533b6b">
> <img width="868" alt="image" src="https://github.com/Adeete6/assessment/assets/155286861/d4b709a7-b568-4048-aef8-840dcd09cc9c">

## Part 3: App Tier Instance
### A group of EC2 instances running the application logic that processes user requests.
> 1. Create Instance - update the correct IAM role, Network and subnets. Connect to private app tier that we had created earlier.Update the security group.
> 2. Connect to Instance
> 3. Configure DB schema thorugh CLI
> 4. Perform Health check of App tier and DB connectivity.

## Internal Load Balancing and Auto Scaling
> 1. Create AMI image
> ![image](https://github.com/Adeete6/assessment/assets/155286861/823e95c5-866b-4561-8b07-ad62a7d05de2)
> 2. Create Target Group
> 3. Create ALB followed by the Launch template - Use the AMI that was created before.
> 4. Set the security group app tier, and then under Advanced details use the same IAM instance profile we have been using for our EC2 instances.
> <img width="1185" alt="image" src="https://github.com/Adeete6/assessment/assets/155286861/52bc8c27-9496-4fe9-8550-471a2c63cfcc">

## Part 4 : Web Tier Instance
### A group of EC2 instances running web servers to handle incoming user requests
> 1. Create Tier 1 (WebTier) which will be used as Front End application.
> 2. update nginx config file, upload code.
> 3. Configure External LB and Autoscaling.


## Conclusions
> Congratulations! You have successfully deployed a three-tier architecture on AWS 
