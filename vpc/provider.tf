provider "aws" {
  profile = var.profile
  region = "ap-southeast-1"

  default_tags {
    tags = {
      provisioned_mode = "terraform"
    }
  }
}
