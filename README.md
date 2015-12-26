This repository contains a small webserver handling the solving process of AMPL-models directly from your web-browser without external services.

It uses [SYMPHONY from COIN-OR](https://github.com/coin-or/SYMPHONY) as the underlying optimization-framework. The webapp is uses light-weight webserver (written in *GO*).

# Install and Use
The installation procedure is different in Linux (Ubuntu) and Max OSX

## Ubuntu

You just clone the repository and build the docker by

```
git clone https://github.com/PatWie/symphony-web.git
cd symphony-web
sudo docker build -t symphony-web image/
```

To launch the application (listening on Port 9090 inside the docker) use

```
sudo docker run -p PORT:9090 symphony-web
```

which forwards the port 9090 (inside docker) to *PORT* on your machine.
If you use `-p 3333:9090`, then point your browser to `http://localhost:3333/`.

## Mac OSX (from Pull-Request)

Things are a bit more complicated on OSX. OSX is not like Linux---virtualization is not built into the kernel. Therefore, we need to run the docker machine inside another VM. For this we, need virtualbox. The instructions below are for installing virutalbox wth homebrew, which seems to work very well. (Caveat: I first found some old instructions on how to do this and take a round-about path to the installation. Therefore, the list of commdns below is not exactly what I did. However, I think it's the right incantation if you are starting from scratch with an updated install of homebrew.)

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
docker run -d -p 9090 --name=web symphony-web
```

Now you should have the web server running in the background that you can reach on port 9090. Next, you need to find out how to connect to it fro outside of the VM. Since it's running inside VM and there may be multiple containers inside the VM listening on the same port, there is some port mapping involved. To find the port that is mapped to 9090 for this particular container, execute

```
docker port web 9090
```

For example, the output on my achine looks like

```
OSX: ~/symphony-web> docker port web 9090
0.0.0.0:32768
```

Finally, find out what IP address is assigned to the VM with

```
docker-machine ip default
```
For me, it is

```
OSX: ~/symphony-web> docker-machine ip default
192.168.99.100
```

Finally, point your browser to the IP address of the VM and the port number you obtained above, i.e.

```
192.168.99.100:32768
```

If you want to be fancy, you can give the docker VM a name with something like

```
echo $(docker-machine ip default) dockerhost | sudo tee -a /etc/hosts
```

# Screenshot

[![screenshot](https://github.com/PatWie/symphony-web/raw/master/screenshot.png)](#Screenshot)

