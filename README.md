# Setup 
* Go to google [cloud platform](https://console.cloud.google.com/)
* IAM & Admin > [service account](https://console.cloud.google.com/iam-admin/serviceaccounts)
* Create a new service account that has permission to access your collection.
* Create a new key for this project
* *Export as json and save* on the root of this project as *'keyfile.json'* (do not commit this file!!!)

# Quering
Write your queries on a file named *query.txt* located on the *queries folder*
The template.txt has guidelines on how to write your queries

# Executing
run: npm i && npm start

The results of the query will be printed on the terminal

# Next steps: 

Implement aggregation