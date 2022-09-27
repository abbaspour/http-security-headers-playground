# add a zone for the demo domain
resource "cloudflare_zone" "demo_zone" {
  zone = var.demo_domain
}

# add CNAME record for app owner origin
resource "cloudflare_record" "www" {
  zone_id = cloudflare_zone.demo_zone.id
  type    = "CNAME"
  name    = "www"
  value   = "http-security-headers.netlify.app"
  ttl     = 60
}


# set worker to proxy auth0 routes
resource "cloudflare_worker_route" "route_xfo_deny" {
  zone_id     = cloudflare_zone.demo_zone.id
  pattern     = "${var.demo_domain}/xfo/deny"
  script_name = cloudflare_worker_script.worker_xfo_deny.name
}

# configure worker to proxy  routes
resource "cloudflare_worker_script" "worker_xfo_deny" {
  name    = "xfo-deny-worker"

  content = file("./src/xfo/xfo-deny.js")
}
