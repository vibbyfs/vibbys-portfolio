'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

const cardGLB = '/models/card.glb';
const lanyard = '/lanyard-v.png';

import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true, logo = "/textures/card-logo.png", logoScale = 1.5 }) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band logo={logo} logoScale={logoScale} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

// Prompt Copilot:
// Ubah komponen Band agar bisa menerima prop "logo" untuk mengganti tekstur kartu (.glb).
// - Default value: "/textures/card-logo.png"
// - Gunakan useTexture dari @react-three/drei untuk load file logo
// - Override materials.base.map dengan logoTex, lalu set needsUpdate = true
// - Jika logo tidak diberikan, pakai default
// - Hasilnya: <Band logo="/textures/my-logo.png" /> akan mengganti tekstur kartu
function Band({ maxSpeed = 50, minSpeed = 0, logo = "/textures/card-logo.png", logoScale = 1 }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const logoTex = useTexture(logo);
  materials.base.map = logoTex;
  materials.base.needsUpdate = true;
  logoTex.repeat.set(logoScale, logoScale);
  logoTex.needsUpdate = true;
  logoTex.wrapS = logoTex.wrapT = THREE.RepeatWrapping;
  const texture = useTexture(lanyard);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);
  const prevPtsRef = useRef(null);
  const prevFlatRef = useRef(null);
  const lastInvalidLogRef = useRef(0);

  // initialize prevPtsRef with a safe set of points so we always have something to fall back to
  useEffect(() => {
    try {
      const seed = curve.getPoints(32).map(p => (p && p.clone ? p.clone() : new THREE.Vector3(p?.x || 0, p?.y || 0, p?.z || 0)));
      prevPtsRef.current = seed;
      const flat = new Float32Array(seed.length * 3);
      for (let i = 0; i < seed.length; i++) {
        flat[i * 3 + 0] = seed[i].x;
        flat[i * 3 + 1] = seed[i].y;
        flat[i * 3 + 2] = seed[i].z;
      }
      prevFlatRef.current = flat;
    } catch (e) {
      // fallback to zeros
      const zeroLen = 33;
      prevPtsRef.current = Array.from({ length: zeroLen }).map(() => new THREE.Vector3());
      prevFlatRef.current = new Float32Array(zeroLen * 3);
    }
  }, [curve]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // initialize lerped vectors for joints to avoid race conditions producing NaN
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;

    const initLerped = () => {
      [j1, j2, j3, fixed].forEach(ref => {
        try {
          if (ref.current && !ref.current.lerped) {
            if (typeof ref.current.translation === 'function') {
              const t = ref.current.translation();
              if (t && Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z)) {
                ref.current.lerped = new THREE.Vector3().copy(t);
              } else {
                ref.current.lerped = new THREE.Vector3();
              }
            } else {
              ref.current.lerped = new THREE.Vector3();
            }
          }
        } catch (e) {
          if (ref.current && !ref.current.lerped) ref.current.lerped = new THREE.Vector3();
        }
      });

      attempts += 1;
      const needRetry = [j1, j2, j3, fixed].some(r => !r.current || !r.current.lerped) && attempts < maxAttempts;
      if (needRetry) setTimeout(initLerped, 100);
    };

    initLerped();
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      // helper to validate vector
      const isFiniteVec = v => v && Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z);
      const safeTranslation = ref => {
        try {
          if (!ref || !ref.current) return null;
          if (typeof ref.current.translation !== 'function') return null;
          const tv = ref.current.translation();
          if (isFiniteVec(tv)) return new THREE.Vector3().copy(tv);
          return null;
        } catch (e) {
          return null;
        }
      };

      [j1, j2, j3, fixed].forEach(ref => {
        // initialize lerped safely: try to copy translation, else fallback to zero vector
        if (!ref.current.lerped) {
          const tr = safeTranslation(ref);
          ref.current.lerped = tr ? tr.clone() : new THREE.Vector3();
        }

        const currentTrans = safeTranslation(ref) || ref.current.lerped;
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(currentTrans)));
        ref.current.lerped.lerp(currentTrans, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });

      // copy joint translations into the curve points (ensure refs exist and are finite)
  const t3 = j3.current?.lerped || safeTranslation(j3) || null;
  const t2 = j2.current?.lerped || safeTranslation(j2) || null;
  const t1 = j1.current?.lerped || safeTranslation(j1) || null;
  const tf = fixed.current?.lerped || safeTranslation(fixed) || null;

      if (t3 && t2 && t1 && tf && band.current && band.current.geometry && typeof band.current.geometry.setPoints === 'function') {
        curve.points[0].copy(t3);
        curve.points[1].copy(t2);
        curve.points[2].copy(t1);
        curve.points[3].copy(tf);

        const rawPts = curve.getPoints(32);

        // helper to check if a vector is finite
        const isFiniteVec = v => v && Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z);

        // sanitize points: replace invalid entries with previous good point or neighbor average
        const sanitizePoints = (ptsArr) => {
          const out = ptsArr.map((p, i) => {
            if (isFiniteVec(p)) return p.clone ? p.clone() : new THREE.Vector3(p.x, p.y, p.z);
            // try previous good
            if (prevPtsRef.current && prevPtsRef.current[i] && isFiniteVec(prevPtsRef.current[i])) return prevPtsRef.current[i].clone();
            // try neighbor average
            const prev = i > 0 ? ptsArr[i - 1] : null;
            const next = i < ptsArr.length - 1 ? ptsArr[i + 1] : null;
            if (isFiniteVec(prev) && isFiniteVec(next)) {
              return new THREE.Vector3((prev.x + next.x) / 2, (prev.y + next.y) / 2, (prev.z + next.z) / 2);
            }
            if (isFiniteVec(prev)) return prev.clone();
            if (isFiniteVec(next)) return next.clone();
            // final fallback to zero vector
            return new THREE.Vector3();
          });
          return out;
        };

        const pts = sanitizePoints(rawPts);

        // flatten to Float32Array, validate numeric finiteness
        const flat = new Float32Array(pts.length * 3);
        let flatOk = true;
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          flat[i * 3 + 0] = p.x;
          flat[i * 3 + 1] = p.y;
          flat[i * 3 + 2] = p.z;
          if (!Number.isFinite(flat[i * 3 + 0]) || !Number.isFinite(flat[i * 3 + 1]) || !Number.isFinite(flat[i * 3 + 2])) {
            flatOk = false;
          }
        }

        if (flatOk) {
          try {
            band.current.geometry.setPoints(flat);
            // store a clone of the points as a safe fallback
            prevPtsRef.current = pts.map(p => (p && p.clone ? p.clone() : new THREE.Vector3(p.x, p.y, p.z)));
            prevFlatRef.current = flat.slice();
          } catch (e) {
            const now = Date.now();
            if (now - lastInvalidLogRef.current > 1000) {
              lastInvalidLogRef.current = now;
              console.warn('Lanyard: geometry.setPoints threw', e);
            }
            // attempt to reapply previous points as a last-ditch recovery
            try {
              if (prevFlatRef.current) band.current.geometry.setPoints(prevFlatRef.current);
            } catch (e2) {
              // swallow
            }
          }
        } else {
          // detailed, rate-limited logging showing exactly which points are invalid
          const now = Date.now();
          if (now - lastInvalidLogRef.current > 1000) {
            lastInvalidLogRef.current = now;
            try {
              const bad = pts
                .map((p, i) => ({ i, ok: isFiniteVec(p), v: p ? { x: p.x, y: p.y, z: p.z } : null }))
                .filter(x => !x.ok);
              const inspect = { joints: [t3, t2, t1, tf].map((t, i) => ({ i, ok: !!t && Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z), v: t ? { x: t.x, y: t.y, z: t.z } : null })), badPoints: bad };
              console.warn('Lanyard: sanitized points still contain invalid entries, skipping update', inspect);
            } catch (e) {
              console.warn('Lanyard: sanitized points invalid (could not inspect)', e);
            }
          }

          // reapply previous good points if possible
          if (prevFlatRef.current) {
            try {
              band.current.geometry.setPoints(prevFlatRef.current);
            } catch (e) {
              // ignore
            }
          }
        }
      }
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
