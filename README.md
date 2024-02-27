# Challenge 1 : A 3-tier environment in aws
# Challenge 2 : Code to query metadata of an instance and provide a json formatted output.
> In this configuration:
1. We use the http provider to make HTTP requests.
2. The data block retrieves information about the current instance using the aws_instance data source.
3. We define a null_resource named metadata_output, which uses a local-exec provisioner to run a local command. This command retrieves metadata about the instance using curl commands and formats it into JSON, then writes it to a file named instance_metadata.json.
4. We define two outputs: one for the JSON-formatted metadata and one for individual metadata fields.
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
