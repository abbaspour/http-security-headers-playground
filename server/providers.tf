terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~>3.24.0"
    }
  }
}

# cloudflare provider config
provider "cloudflare" {
  email      = var.cloudflare_email
  account_id = var.cloudflare_account_id
  api_key    = var.cloudflare_api_key
}

