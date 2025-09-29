export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  // Use `unknown` here to avoid `any` while keeping the shape flexible.
  // Consumers can cast to a concrete type if needed.
  export const MeshLineGeometry: unknown;
  export const MeshLineMaterial: unknown;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Allow arbitrary props for these custom JSX elements, but avoid `any`.
      meshLineGeometry: Record<string, unknown>;
      meshLineMaterial: Record<string, unknown>;
    }
  }
}
