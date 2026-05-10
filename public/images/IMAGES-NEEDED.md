# Real Images To Drop In

The site code references the local files below. Save the images you've shared to these exact paths/filenames, and the site will pick them up automatically.

## Required

| File path | What it is | Used on |
|---|---|---|
| `/public/images/dr-alaa.jpg` | Dr. Alaa headshot (the photo from the LMC business card) | About page portrait — auto-loaded if present, falls back to a clinical interior if missing |
| `/public/images/logo-az.png` | Gold "AZ — Dr. Alaa Zidan" monogram | Optional — the styled CSS AZ already approximates the look |
| `/public/images/business-card.jpg` | Optional — the full LMC business card | Not currently referenced |

**File name must be exactly `dr-alaa.jpg`** (lowercase, hyphen, JPG). Save the headshot from the LMC business card, cropped to a square or 4:5 portrait, at this exact path.

## Treatment images (used on Services + Blog posts)

| File path | What it is |
|---|---|
| `/public/images/treatments/microneedling.jpg` | Microneedling infographic ("Small needles, big results") |
| `/public/images/treatments/botox-frown.jpg` | Botox for frown lines before/after |
| `/public/images/treatments/botox-forehead.jpg` | Forehead Botox before/after |
| `/public/images/treatments/lip-filler.jpg` | Natural Lip Filler before/after |
| `/public/images/treatments/exosomes-hair.jpg` | Exosomes for Hair before/after |

## Notes

- **Logo fallback**: until `/public/images/logo-az.png` is added, the site renders an "AZ" monogram styled in the Allura cursive font on a gold ring. It looks similar to the real logo. Drop in the real PNG to replace.
- **Image format**: JPG or PNG both fine. Aspect ratios — Dr. Alaa headshot ideally square or 4:5 portrait; treatment images ideally 4:3 or square.
- **Resolution**: aim for 1200px on the longest edge. Next.js will resize automatically.
