---
title: Tailrd
summary: Job seekers waste hours rewriting resumes. Tailrd rewrites one for any job description, runs ATS fit checks, and writes the cover letter.
period: Sep 2026 – now
order: 202609
role: Solo founder and engineer
stack: [LLM APIs, JavaScript, Firebase, GitHub Actions]
featured: true
links:
  - { label: Try Tailrd, href: 'https://tailrd.web.app' }
status: Live · web app and browser extension
noPath: There was no team, so I was the product designer, the engineer, and the release manager.
stats:
  - { value: '50+', label: users }
  - { value: Weekly, label: releases }
  - { value: '2', label: 'surfaces: web and extension' }
---

## The problem
Tailoring a resume to every job description takes hours, and most people skip it, so their resumes get filtered out by applicant tracking systems.

## What I did
I built Tailrd on my own, from idea to production. It's live as a web app and a browser extension.

- Designed a multi-step LLM workflow that rewrites a resume for any job description: it reorders the most relevant skills, strengthens action verbs, runs ATS fit checks, and generates a cover letter.
- Integrated LLM APIs into a production app, handling prompts, structured outputs, and failure cases for real users.
- Set up CI/CD with GitHub Actions and Firebase Hosting, with a pull-request-based preview-to-production release flow.

## Result
Tailrd is live with 50+ users, and I ship updates every week.
