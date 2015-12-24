This repository contains a small webserver handling the solving process of AMPL-models directly from your web-browser without external services.

It uses [SYMPHONY from COIN-OR](https://github.com/coin-or/SYMPHONY) as the underlying framework. The webapp is written in *GO* coming with a light-weight webserver.

# Install

```
git clone https://github.com/PatWie/symphony-web.git
cd symphony-web
sudo docker build -t symphony-web image/
```

That's it!

# Use

```
sudo docker run -p PORT:9090 -it symphony-web
```

where PORT is any port on your machine. I use "9090", too.
Point your browser to `http://localhost:PORT/`, where PORT is your chosen PORT.

# Screenshot

[![screenshot](https://github.com/PatWie/symphony-web/raw/master/screenshot.png)](#Screenshot)