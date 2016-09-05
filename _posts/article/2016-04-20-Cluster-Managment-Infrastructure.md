---
layout: post
title: Cluster Management Infrastructure Provision Script
excerpt: "I needed a vacation, so I took a week off and went to Los Angeles to hang out with my friends. I quickly found out how hard it was to seriously take a vacation from coding. During luls and early mornings when everyone else was waking up I created this: a portable bash script that I can take to whatever Azure infrastructure my employer can afford me."
categories: [Writing]
comments: true
image:
    feature: image-docker.jpg
---

###### Why was this created?
I needed a vacation, so I took a week off and went to Los Angeles to hang out with my friends. I quickly found out how hard it was to seriously take a vacation from coding. During luls and early mornings when everyone else was waking up I created this: a portable bash script that I can take to whatever Azure infrastructure my employer can afford me.

###### CoreOS-Provision
An automatic provisioning script for creating a CoreOS cluster through CLI.

###### CoreOS?
Yeah it's great. CoreOS is a top of the line, cutting edge server operating system. If your interested in having a distributed cluster management system, that is. CoreOS clustered with Docker Swarm means I'll be able to sustain a VPS failure, DDOS attack, and keep my applications containerized and backed up within a Docker registry that will sit in a privately networked spiderweb set off to the side from the HA load balancer.

This repository is Felix's bag of tricks, so I'll just keep throwing stuff in here.

##### Todo
+ Create a separate bash script for Digital Ocean's CLI and I guess AWS
+ Create NGINX reverse-proxy HA load balancer
+ Create Docker Swarm cluster management

##### Repository

[https://gitlab.com/ampelos/CoreOS-Provision](https://gitlab.com/ampelos/CoreOS-Provision)
