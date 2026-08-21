resource "aws_db_instance" "postgres" {
  engine = "postgres"
  instance_class = "db.t3.medium"
  allocated_storage = 20
  name = var.db_name
}
