# HTTP Security Headers Playground

A super simple demo/playground to showcase different HTTP security headers in action.

```bash
./self-sign.sh
make
```

To test HTTPS connection with self-signed certificate, first visit <a href="chrome://flags/#allow-insecure-localhost">chrome://flags/#allow-insecure-localhost</a>

## Running Canvas on Netlify Functions
If you get following error from Netfliy function:
>  Error - /lib64/libz.so.1: version `ZLIB_1.2.9' not found (required by /var/task/node_modules/canvas/build/Release/libpng16.so.16)

based on [https://answers.netlify.com/t/node-canvas-error-libuuid-so-1-cannot-open-shared-object-file-no-such-file-or-directory/30179/6] Netlify community answers. 

```bash
brew install multipass
multipass launch --name netlify focal

```
