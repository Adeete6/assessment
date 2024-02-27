# Challenge 1 : A 3-tier environment in aws
# Challenge 2 : Code to query metadata of an instance and provide a json formatted output.
> In this configuration:
> 1. Set up AWS CLI: Make sure you have AWS CLI configured with proper credentials.
> 2. Create Terraform Configuration File: Copy the provided Terraform code into a file with a .tf extension, for example, instance_metadata.tf.
> 3. Initialize Terraform: Navigate to the directory where you saved the Terraform configuration file and run terraform init to initialize Terraform and download the necessary providers.
> 4. Deploy the Configuration: Run terraform apply to apply the configuration and create the necessary resources. Terraform will prompt you to confirm the action. Type yes and press Enter to proceed.
> 5. Retrieve Instance Metadata: Once the deployment is complete, Terraform will output the instance metadata in JSON format. You can find this output in the terminal.
> 6. Test Specific Metadata Value: If you want to test retrieving a specific metadata value, you can use the output value named specific_metadata_value. This will output the value of the specific key you specified in the Terraform configuration.
# Challenge 3 : We have a nested object. We would like a function where you pass in the object and a key and get back the value.
> Step 1: Declare a Json object called data.
> 
> Step 2: We will define a function called getValueFromNestedObject to access the nested keys of the JSON data. Inside this function we have initiated an if condition, which is checking that the key is directly available in the json data or not, if the condition is true the return its value.
> 
> Step 3: If data is not present directly and data is nested then we will define a variable named keys which is representing nested data with dot.
> 
> Step 4: Define another variable called value which is holding json data called obj.
> 
> Step 5: Now call the created function and print the values of nested keys.
>
> <img width="968" alt="Screenshot 2024-02-27 at 7 37 31 AM" src="https://github.com/Adeete6/assessment/assets/155286861/2be374f4-d92f-49b0-a7c4-ff2420e62cd7">
