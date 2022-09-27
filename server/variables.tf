# cloudflare config
variable "cloudflare_email" {
  type        = string
  description = "cloudflare email"
}

variable "cloudflare_account_id" {
  type        = string
  description = "cloudflare account_id"
}

variable "cloudflare_api_key" {
  type        = string
  description = "cloudflare api key"
  sensitive   = true
}

# domains config
variable "demo_domain" {
  description = "Demo domain"
}

