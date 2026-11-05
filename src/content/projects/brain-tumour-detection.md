---
title: Brain tumour detection with multimodal image fusion
summary: Fuses CT and MRI scans for a clearer picture, then detects tumours with transfer learning, deployed as a web app.
order: 202302
stack: [Python, VGG-19, Wavelet transforms, Flask]
---

## What I did
- Fused CT and MRI scans using wavelet transforms, so each image carries the strengths of both.
- Trained a tumour detector with VGG-19 transfer learning.
- Deployed the model as a Flask web app.
