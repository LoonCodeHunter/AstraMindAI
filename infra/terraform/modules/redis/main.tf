resource "aws_elasticache_cluster" "redis" {
  cluster_id = var.cluster_id
  engine = "redis"
  node_type = "cache.t3.micro"
}
