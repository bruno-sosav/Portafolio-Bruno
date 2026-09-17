
export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Rejilla técnica, desvanecida hacia los bordes */}
      <div
        className="blueprint absolute inset-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 25%, #000 0%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 25%, #000 0%, transparent 78%)',
        }}
      />

      <div
        className="absolute -top-[28rem] -left-[18rem] h-[62rem] w-[62rem] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--c-glow-key) 0%, transparent 62%)',
          opacity: 'var(--c-glow-key-opacity)',
        }}
      />

      <div
        className="absolute top-[40%] -right-[24rem] h-[52rem] w-[52rem] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, var(--c-glow-fill) 0%, transparent 60%)',
          opacity: 'var(--c-glow-fill-opacity)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 40%, transparent 40%, var(--c-vignette) 100%)',
        }}
      />

      <div className="grain absolute inset-0" />
    </div>
  )
}
