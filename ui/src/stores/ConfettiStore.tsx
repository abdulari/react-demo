import { create } from 'zustand';

type ConfettiMode = "fall" | "boom";

const ConfettiStore = create((set) => ({
    mode: "fall", // "fall" | "boom"
    x: 0.5,
    y: 0.5,
    particleCount: 30,
    deg: 270,
    shapeSize: 12,
    spreadDeg: 30,
    effectinterval: 3000,
    effectCount: 1,
    colors: ['#ff577f', '#ff884b', '#ffd384', '#fff9b0'],
    launchSpeed: 1,
    fadeOutHeight: 0.8,
    opacityDeltaMultiplier: 1,
    setMode: (mode: ConfettiMode) => set({ mode }),
    setX: (x: number) => set({ x }),
    setY: (y: number) => set({ y }),
    setParticleCount: (particleCount: number) => set({ particleCount }),
    setDeg: (deg: number) => set({ deg }),
    setShapeSize: (shapeSize: number) => set({ shapeSize }),
    setSpreadDeg: (spreadDeg: number) => set({ spreadDeg }),
    setEffectInterval: (effectinterval: number) => set({ effectinterval }),
    setEffectCount: (effectCount: number) => set({ effectCount }),
    setColors: (colors: string[]) => set({ colors }),
    setLaunchSpeed: (launchSpeed: number) => set({ launchSpeed }),
    setFadeOutHeight: (fadeOutHeight: number) => set({ fadeOutHeight }),
    setOpacityDeltaMultiplier: (opacityDeltaMultiplier: number) => set({ opacityDeltaMultiplier }),
}))

export default ConfettiStore;