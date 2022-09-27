# HTTP Security Headers Playground

A super simple demo/playground to showcase different HTTP security headers in action.

## Client
Client is deployed automatically from GitHub to Netlify.

## Server
Server side is Cloudflare workers. Create a free account and populate tfvars file accordingly.

```bash
cd server
cp terraform.auto.tfvars-sample terraform.auto.tfvars
vim terraform.auto.tfvars
make init
make 
make apply
```
