# Rendering Guide

## Preview
```bash
npm run dev
```

## Render the sample composition
```bash
npm run render
```

## Render a still frame
```bash
npm run still
```

## Validate TypeScript
```bash
npm run typecheck
```

## Duration standard
- Every standard video must be 40–60 seconds.
- Default planning and demo duration: 50 seconds.
- At 30 fps: 40 seconds = 1200 frames; 50 seconds = 1500 frames; 60 seconds = 1800 frames.
- If a composition duration changes, update `src/Root.tsx`, its scene timing, `src/data/`, the script/storyboard timecodes, and this guide together.

## Output settings
- Composition: `EverydayExplainer`
- Width: 1080
- Height: 1920
- FPS: 30
- Duration: 1500 frames (50 seconds; project standard is 40–60 seconds)
- Output: `out/everyday-explainer.mp4`

If rendering fails, read the complete terminal error. Check that Node.js, dependencies, and the browser rendering environment are installed. Do not assume a render succeeded merely because the command started.
