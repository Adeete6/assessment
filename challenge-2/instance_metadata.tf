provider "aws" {
  region = "us-east-1" 
}

data "aws_instance" "example" {
  instance_id = "i-0123456789abcde0"  
}

output "instance_metadata_json" {
  value = {
    instance_id       = data.aws_instance.example.id
    instance_type     = data.aws_instance.example.instance_type
    availability_zone = data.aws_instance.example.availability_zone
  }
}

output "specific_metadata_value" {
  value = data.aws_instance.example.tags["key"]
}
