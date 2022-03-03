import esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist/esm',
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: 'esm',
    target: 'esnext',
    plugins: [],
})

esbuild.build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist/cjs',
    bundle: true,
    sourcemap: true,
    minify: true,
    format: 'cjs',
    target: 'esnext',
    plugins: [],
})