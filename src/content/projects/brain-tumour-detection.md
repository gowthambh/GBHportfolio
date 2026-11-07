---
title: Brain tumour detection with multimodal image fusion
summary: Fuses CT and MRI scans for a clearer picture, then detects tumours with transfer learning, deployed as a web app.
order: 202302
stack: [Python, VGG-19, Wavelet transforms, Flask]
overview: >-
  A tool that helps spot brain tumours. CT and MRI scans each show different detail, so the system first fuses them into one image with wavelet transforms. A VGG-19 model, fine-tuned with transfer learning, then detects the tumour, and the whole thing runs as a simple web app.
tech:
  - area: Models
    items: [VGG-19, transfer learning]
  - area: Image processing
    items: [Wavelet-based CT and MRI fusion]
  - area: App
    items: [Python, Flask]
---

## What I did
- Fused CT and MRI scans using wavelet transforms, so each image carries the strengths of both.
- Trained a tumour detector with VGG-19 transfer learning.
- Deployed the model as a Flask web app.
