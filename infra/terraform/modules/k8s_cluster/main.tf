resource "aws_eks_cluster" "cluster" {
  name     = var.name
  role_arn = var.role_arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}
