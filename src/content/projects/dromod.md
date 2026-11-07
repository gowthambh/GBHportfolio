---
title: DroMOD, secure image transmission for drones
summary: Real-time object detection on drones, with multi-tier encryption so the images sent to the server stay secure.
period: Jan – Jun 2024
order: 202401
stack: [Deep learning, Embedded systems]
overview: >-
  DroMOD keeps what a drone sees private. Object detection runs on the drone itself in real time, and every image sent back to the server is protected with several layers of encryption, so an intercepted link doesn't give away what the drone sees.
tech:
  - area: AI
    items: [Deep learning, real-time object detection]
  - area: Hardware
    items: [Embedded systems on the drone]
  - area: Security
    items: [Multi-tier image encryption]
---

## The problem
Drones that stream images to a server are exposed: anyone who intercepts the link sees what the drone sees.

## What I did
Built real-time object detection that runs on the drone, and added multi-tier encryption to every image sent to the server.
