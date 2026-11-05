---
title: Medicinal plant identification engine
summary: Identifying medicinal plants in the field is hard for a single model. My three-model pipeline was about 30% more accurate than any single model on real field data.
period: 2025 – 2026
order: 202509
role: AI Engineer and R&D team lead, Q.DoTZ
stack: [PyTorch, Object detection, Segmentation, Classification]
featured: true
status: Built at Q.DoTZ
noPath: No ready dataset or model handled medicinal plants in messy field photos, so I designed the data process and the pipeline from scratch.
stats:
  - { value: '~30%', label: more accurate than any single model }
  - { value: '3', label: 'models: detect, segment, classify' }
  - { value: '12', label: R&D initiatives coordinated }
---

## The problem
Medicinal plants look alike, and field photos are messy: varied lighting, cluttered backgrounds, partial leaves. A single model struggled on real-world data.

## What I did
- Built the AI engine from scratch as a three-model pipeline: detection finds the plant, segmentation isolates it, and classification identifies it.
- Owned the data pipeline end to end: defined the data requirements, wrote the dataset collection SOP, led field data collection, trained interns to label data, and managed 80/10/10 train, validation, and test splits.
- Trained deep learning models on aerial and drone imagery.
- Led a team of researchers and interns and coordinated 12 parallel R&D initiatives through a project dashboard I built.
- Contributed to IP and patent development, and wrote the technical and TRL documentation for stakeholders.

## Result
About 30% higher accuracy than any single-model approach on real-world field data.
