terraform {
  required_version = ">= 1.5.0"
}

provider "aws" {
  region = var.region
}
