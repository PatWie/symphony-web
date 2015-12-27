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

where `PORT` is any port on your (host) machine (`9090` is the port exposed to the host from the docker machine.
I use `9090` for both. Point your browser to `http://localhost:PORT/`, where `PORT` is your chosen `PORT`.

# Installation on Mac OSX

Since Docker is a bit more difficult to get running on OSX than on Linux, this is some additiona documentation for the OSX crowd. OSX is not like Linux---virtualization is not built into the kernel. Therefore, we need to run the docker machine inside another VM. For this, we need virtualbox. The instructions below are for installing virutalbox with `homebrew`, which seems to work very well. (Caveat: I first found some old instructions on how to do this and took a round-about path to the installation. Therefore, the list of commdns below is not exactly what I did. However, I think it's the right incantation if you are starting from scratch with an updated install of homebrew.)

First, install virtualbox

```
brew update
brew tap caskroom/cask
brew cask install virtualbox
```

Now install `docker` and `docker-machine`

```
brew install docker
brew install docker-machine
```

Create a new docker server to run in virtualbox and set environment variables so docker knows how to connect to it.

```
docker-machine create --driver virtualbox default
eval "$(docker-machine env default)"
```

Now follow instructions as above for building the container

```
git clone https://github.com/PatWie/symphony-web.git
cd symphony-web/
docker build -t symphony-web image/
```

Finally, start up the server and the container

```
docker-machine start default
docker run -d -p PORT:9090 --name=web symphony-web
```

where `PORT` is the port you want to use for accessing the server on the host machine (the second port `9090` is the port used by the docker machine running inside virtual box). Finally, find out what IP address is assigned to the VM with

```
docker-machine ip default
```

For example, on my OSX box, it is

```
OSX: ~/symphony-web> docker-machine ip default
192.168.99.100
```

Finally, point your browser to the IP address of the VM and the port number from above, i.e.

```
192.168.99.100:PORT
```

If you want to be fancy, you can give the docker VM a name with something like

```
echo $(docker-machine ip default) dockerhost | sudo tee -a /etc/hosts
```

# Screenshot

[![screenshot](https://github.com/PatWie/symphony-web/raw/master/screenshot.png)](#Screenshot)


