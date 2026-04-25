---
# ─────────────────────────────────────────────────────────
#  POST TEMPLATE — not published (lives in _drafts/)
#  To create a real post, copy this file to _posts/
#  using the format: YYYY-MM-DD-place-name.md
# ─────────────────────────────────────────────────────────

layout: post

# Title shown in the hero and in the home card
title: "Place Name"

# Post date (not necessarily the date of the visit)
date: 2025-01-01

# Free-form category, used to group posts in the future
categories: urbex

# Custom URL for the post (optional)
# If omitted, Jekyll generates /category/YYYY/MM/DD/title/
# permalink: /urbex/place-name/

# Image used:
#   - As the full-screen hero background on the post page
#   - As the background image on the home card
cover_image: /assets/images/posts/place-name/cover.jpg

# Location shown next to the date in the hero and the card
# Free format: city, type of place, country...
location: "City, Country"

# ─────────────────────────────────────────────────────────
#  IMAGE GALLERY
#  Each entry has the following fields:
#    src  — relative path to the image (required)
#    type — how the image will be displayed (optional, default: horizontal)
#    alt  — accessible alt text (optional)
#
#  Available types:
#
#    panorama   →  ratio 16:7  · spans both columns
#                  Best for: opening image, wide-angle, establishing shot
#
#    wide       →  ratio 16:9  · spans both columns
#                  Best for: facades, skies, broad interior shots
#
#    horizontal →  ratio 3:2   · single column
#                  Best for: landscapes, interiors, general views
#                  (default value if type is omitted)
#
#    vertical   →  ratio 2:3   · single column
#                  Best for: staircases, corridors, doorways, tall details
#
#  Composition tips:
#    - Always start with panorama or wide to introduce the location
#    - Alternate horizontal/vertical in pairs to balance the grid
#    - Use wide to visually separate narrative sections within the report
# ─────────────────────────────────────────────────────────
images:
  - src: /assets/images/posts/place-name/01.jpg
    type: panorama
    alt: "General view of the location"

  - src: /assets/images/posts/place-name/02.jpg
    type: horizontal
    alt: "Brief description"

  - src: /assets/images/posts/place-name/03.jpg
    type: vertical
    alt: "Brief description"

  - src: /assets/images/posts/place-name/04.jpg
    type: wide

  - src: /assets/images/posts/place-name/05.jpg
    # no type → horizontal by default
---

<!-- ───────────────────────────────────────────────────────
     POST BODY TEXT (optional)
     If left empty, the text section will not be rendered.
     If filled, it appears between the hero and the gallery.
     Standard Markdown is supported.
     ─────────────────────────────────────────────────────── -->

Optional introductory text about the location, the visit, or its historical context.
Supports **bold**, _italic_, and any standard Markdown.
