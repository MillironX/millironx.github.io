#!/bin/sh
# The command I use to shrink the CSS is so long, I saved it here
purifycss ./css/bootstrap.css ./css/gsdk-main.css ./css/gsdk-demo.css ./css/millironx_customstyles.css \
  ./*.html ./_layouts/*.html ./js/jquery.fittext.js ./js/MillironX_CustomScripts.js \
  --min --out ./css/bundle.css --whitelist collapsing
