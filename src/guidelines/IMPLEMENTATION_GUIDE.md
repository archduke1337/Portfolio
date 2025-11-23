# Anti-Gravity Portfolio - Implementation Guide & Pseudocode

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [React Component Pseudocode](#react-component-pseudocode)
3. [Three.js Integration](#threejs-integration)
4. [Physics Simulation](#physics-simulation)
5. [Animation Patterns](#animation-patterns)
6. [State Management](#state-management)
7. [Performance Considerations](#performance-considerations)

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│         Anti-Gravity Portfolio App          │
├─────────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐   │
│  │     GravitationalHero Component     │   │
│  │  - Warped typography                │   │
│  │  - Cursor tracking                  │   │
│  │  - Gravitational pull effects       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  HolographicNav Component (Fixed)   │   │
│  │  - Ring-based navigation            │   │
│  │  - Beacon pulse animations          │   │
│  │  - Expandable on interaction        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │   ParticleSystem (Background)       │   │
│  │  - Cosmic dust drift                │   │
│  │  - Meteor streaks                   │   │
│  │  - Optimized for 60fps              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │    FloatingOrb Section               │   │
│  │  - Draggable skill orbs              │   │
│  │  - Clustering on proximity           │   │
│  │  - Constellation lines               │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │   AntiGravityCard Grid               │   │
│  │  - Tumbling animations               │   │
│  │  - Modal expansion on click          │   │
│  │  - Black hole warp effects           │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │    CommsArray Component              │   │
│  │  - Contact form with glow            │   │
│  │  - Signal wave transmission          │   │
│  │  - Success confirmation              │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## React Component Pseudocode

### FloatingOrb Component - Detailed Implementation

```typescript
/**
 * FloatingOrb.tsx
 * 
 * Implements a draggable, interactive skill sphere with 3D rendering
 * and physics-based movement.
 */

interface FloatingOrbProps {
  label: string;
  color: string;
  glowColor: string;
  position?: { x: number; y: number };
  onDrag?: (position: { x: number; y: number }) => void;
  onHover?: (isHovering: boolean) => void;
  size?: number;
  speed?: number;
}

/**
 * PSEUDOCODE ALGORITHM
 * 
 * 1. INITIALIZATION
 *    - Parse props (color, label, initial position)
 *    - Set default position to random point in viewport
 *    - Initialize drag state = false
 *    - Initialize hover state = false
 *    - Load 3D canvas with Three.js icosahedron mesh
 * 
 * 2. RENDER LOOP (useFrame - 60fps)
 *    - Update mesh rotation:
 *      rotation.x += 0.005 * speed
 *      rotation.y += 0.008 * speed
 *    - Apply distortion material effect:
 *      distort = 0.28 + sin(time * 1.2) * 0.12
 *    - Update point light position if hovering
 *    - Emit particles if speed > 3
 * 
 * 3. DRAG HANDLER
 *    On mouse down:
 *      isDragging = true
 *      dragStartPos = { e.clientX, e.clientY }
 *    
 *    On mouse move (while dragging):
 *      delta = { e.clientX - dragStartPos.x, e.clientY - dragStartPos.y }
 *      newPos = currentPos + delta
 *      
 *      // Constrain to viewport
 *      newPos.x = clamp(newPos.x, 0, viewport.width - size)
 *      newPos.y = clamp(newPos.y, 0, viewport.height - size)
 *      
 *      setCurrentPos(newPos)
 *      onDrag?.(newPos)
 *      
 *      // Check for proximity clustering
 *      nearbyOrbs = findOrbsWithin(newPos, CLUSTER_RADIUS)
 *      if (nearbyOrbs.length > 0):
 *        drawConstellationLines(nearbyOrbs)
 *    
 *    On mouse up:
 *      isDragging = false
 * 
 * 4. HOVER STATE
 *    On mouse enter:
 *      isHovering = true
 *      animate scale: 1 → 1.15
 *      animate glow intensity: 0.3 → 1.0
 *      emit expansion particle ring
 *      onHover?.(true)
 *    
 *    On mouse leave:
 *      isHovering = false
 *      animate scale: 1.15 → 1
 *      animate glow intensity: 1.0 → 0.3
 * 
 * 5. CLUSTERING ALGORITHM
 *    // Find nearby orbs
 *    for each orb in scene:
 *      distance = calculateDistance(currentPos, orb.pos)
 *      if distance < CLUSTER_RADIUS:
 *        cluster.push(orb)
 *    
 *    // Draw constellation lines
 *    for each pair in cluster:
 *      drawLineBetween(orb1.pos, orb2.pos):
 *        line.color = gradient(orb1.color → orb2.color)
 *        line.opacity = 0.5
 *        line.animation = "pulse-glow 2s infinite"
 */

export function FloatingOrb(props: FloatingOrbProps) {
  // State Management
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentPos, setCurrentPos] = useState(props.position || { x: 0, y: 0 });
  const [nearbyOrbs, setNearbyOrbs] = useState<FloatingOrbProps[]>([]);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
  };

  // Handle drag movement with viewport constraining
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current || !containerRef.current) return;

    const rect = containerRef.current.parentElement?.getBoundingClientRect();
    if (!rect) return;

    // Calculate new position
    const newX = Math.max(0, Math.min(
      e.clientX - rect.left,
      rect.width - props.size!
    ));
    const newY = Math.max(0, Math.min(
      e.clientY - rect.top,
      rect.height - props.size!
    ));

    setCurrentPos({ x: newX, y: newY });
    props.onDrag?.({ x: newX, y: newY });

    // Calculate clustering
    updateClusteringDisplay();
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  // Hover effect with glow enhancement
  const handleHoverStart = () => {
    setIsHovering(true);
    props.onHover?.(true);
    // Emit particle ring on hover
    emitParticleRing(props.color, 20);
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    props.onHover?.(false);
  };

  // Update clustering visualization
  const updateClusteringDisplay = () => {
    // Find nearby orbs within CLUSTER_RADIUS (e.g., 150px)
    const nearby = findNearbyOrbs(currentPos, 150);
    setNearbyOrbs(nearby);
    
    // Draw constellation lines
    drawConstellationLines(nearby);
  };

  // Three.js Mesh Rotation
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // Smooth rotation
    meshRef.current.rotation.x = t * 0.2 * props.speed!;
    meshRef.current.rotation.y = t * 0.3 * props.speed!;
    
    // Distortion wave effect
    if (meshRef.current.material instanceof THREE.MeshPhongMaterial) {
      meshRef.current.material.emissiveIntensity = 
        0.6 + Math.sin(t * 1.2) * 0.2;
    }
  });

  return (
    <motion.div
      ref={containerRef}
      className="absolute"
      style={{ width: props.size, height: props.size }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      animate={{
        x: currentPos.x,
        y: currentPos.y,
        scale: isHovering ? 1.15 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
    >
      {/* 3D Canvas for Orb */}
      <Canvas camera={{ position: [0, 0, 3] }}>
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 5]} />
          <meshPhongMaterial
            color={props.color}
            emissive={props.color}
            emissiveIntensity={isHovering ? 1 : 0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <pointLight 
          color={props.glowColor} 
          intensity={isHovering ? 2 : 1} 
          distance={10}
        />
        <ambientLight intensity={0.4} />
      </Canvas>

      {/* Label Below */}
      <div
        className="absolute top-full mt-3 whitespace-nowrap text-xs"
        style={{
          color: props.color,
          textShadow: `0 0 10px ${props.glowColor}`,
          opacity: isHovering ? 1 : 0.7,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {props.label}
      </div>

      {/* Glow Ring Indicator */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: props.glowColor }}
        animate={{
          boxShadow: isHovering 
            ? `0 0 30px ${props.glowColor}`
            : `0 0 15px ${props.glowColor}80`,
        }}
      />

      {/* Constellation Lines to Nearby Orbs */}
      {nearbyOrbs.map((orb, i) => (
        <ConstellationLine
          key={i}
          from={currentPos}
          to={orb.position!}
          color1={props.color}
          color2={orb.color}
          strength={1 - i * 0.1}
        />
      ))}
    </motion.div>
  );
}
```

### GravitationalHero - Animation Pattern

```typescript
/**
 * PSEUDOCODE: GravitationalHero
 * 
 * Core concept: Hero section with character-level animation
 * and cursor-based gravitational pull
 */

ALGORITHM NameCharacterAnimation:
  INPUT: name string, cursor position
  
  PROCESS:
    // Split name into characters
    chars = name.split('')
    
    // For each character
    FOR each char IN chars:
      // Track individual hover state
      onMouseEnter(charIndex):
        hoveredLetter = charIndex
        animate char:
          scaleY: 1 → 1.1
          skewX: 0 → -5deg
          rotation: 0 → 5deg
          duration: 0.3s spring
      
      // Cursor tracking effect
      cursorAngle = calculateAngle(char.center, cursor.pos)
      distanceFromCursor = calculateDistance(char.center, cursor.pos)
      
      // Apply gravitational pull
      if distanceFromCursor < GRAVITY_RADIUS (e.g., 300px):
        pullStrength = 1 - (distanceFromCursor / GRAVITY_RADIUS)
        pullVector = normalize(cursor.pos - char.pos) * pullStrength * 15px
        
        animate char:
          transform: translate(...pullVector)
          opacity: 1 - pullStrength * 0.1
          filter: blur(pullStrength * 2px)
  
  OUTPUT: Animated character components with gravitational effects

ALGORITHM BackgroundGlowInteraction:
  INPUT: cursor position
  
  PROCESS:
    // Cyan glow (top-left bias)
    cyanGlow.position = cursor.pos
    animate cyanGlow:
      x: cursor.x - 200
      y: cursor.y - 200
      duration: 0.4s spring
      stiffness: 100
    
    // Magenta glow (bottom-right bias)
    magentaGlow.position = opposite(cursor.pos)
    animate magentaGlow:
      x: viewport.width - cursor.x
      y: viewport.height - cursor.y
      duration: 0.5s spring
      stiffness: 80
  
  OUTPUT: Dual-color glow following cursor with parallax offset

ALGORITHM ScrollIndicator:
  INPUT: scroll position
  
  PROCESS:
    // Pulsing indicator
    animate scrollIndicator:
      y: [0px, 10px, 0px]
      duration: 2s infinite
      easing: ease-in-out
    
    // Mouse wheel detection
    onScroll():
      scrollDistance += event.deltaY
      if scrollDistance > THRESHOLD:
        fadeOut scrollIndicator
        trigger next section animation
```

### HolographicNav - Ring Expansion Algorithm

```typescript
/**
 * PSEUDOCODE: HolographicNav Ring Expansion
 * 
 * Navigation items orbit around center point on expansion
 */

ALGORITHM RingNavigation:
  INPUT: isExpanded boolean, itemCount int, radius px
  
  PROCESS:
    CONSTANTS:
      RING_RADIUS = 100px (desktop) or 60px (mobile)
      ITEM_COUNT = 5 (or props.items.length)
      ROTATION_SPEED = 20s for full rotation
    
    // Calculate item positions on ring
    FOR i = 0 TO itemCount-1:
      angle = (i / itemCount) * 2π - π/2  // Start at top
      x = cos(angle) * RING_RADIUS
      y = sin(angle) * RING_RADIUS
      
      itemPositions[i] = { x, y }
    
    // Animate ring rotation (continuous)
    IF isExpanded:
      animate ringContainer:
        rotation: 0deg → 360deg
        duration: ROTATION_SPEED
        repeat: infinite
        easing: linear
    ELSE:
      animate ringContainer:
        rotation: 0deg
        duration: 0.3s spring
    
    // Animate item positions
    FOR each item:
      IF isExpanded:
        animate item:
          x: itemPositions[i].x
          y: itemPositions[i].y
          delay: i * 0.05s
      ELSE:
        animate item:
          x: 0
          y: 0
          delay: 0s
      
      transition:
        type: spring
        stiffness: 300
        damping: 30
    
    // Item glow effect
    animate itemGlow:
      boxShadow: "0 0 20px ${color}"
      IF hovered:
        boxShadow: "0 0 40px ${color}, 0 0 60px ${color}80"
  
  OUTPUT: Expanding/contracting ring navigation with orbital items

ALGORITHM HolographicPulse:
  INPUT: isExpanded, activeItem
  
  PROCESS:
    // Ring background pulse
    animate ring:
      boxShadow: "0 0 20px rgba(0,255,255,0.3)"
      IF isExpanded:
        boxShadow: "0 0 40px rgba(0,255,255,0.6)"
        boxShadow-inset: "0 0 30px rgba(0,255,255,0.1)"
    
    // Active item beacon
    animate activeItem:
      boxShadow: beacon-pulse 2s infinite
      background: rgba(0,255,255,0.2)
      border-color: rgba(0,255,255,0.8)
  
  OUTPUT: Glowing, pulsing navigation indicators
```

### AntiGravityCard - Tumbling & Physics

```typescript
/**
 * PSEUDOCODE: AntiGravityCard Tumbling Animation
 * 
 * Cards rotate in 3D space with varying speeds
 * Expand on click with modal portal effect
 */

ALGORITHM CardTumbling:
  INPUT: cardIndex int, cardData Object
  
  PROCESS:
    // Tumbling rotation
    CONST baseSpeed = 8s
    CONST speedVariation = cardIndex * 0.5s
    CONST tumbleDuration = baseSpeed + speedVariation
    
    animate card:
      rotateX: 0deg → 360deg
      rotateY: 0deg → 180deg
      rotateZ: 0deg → 90deg
      duration: tumbleDuration
      repeat: infinite
      easing: linear
    
    // Floating/levitation
    animate card:
      y: 0px → -20px → 0px
      duration: 6s
      repeat: infinite
      easing: ease-in-out
    
    // Stagger initial animation
    animate card (entrance):
      opacity: 0 → 1
      y: 40px → 0px
      delay: cardIndex * 0.1s
      duration: 0.6s spring
  
  OUTPUT: Smoothly tumbling card with floating motion

ALGORITHM CardHoverExpansion:
  INPUT: isHovered boolean
  
  PROCESS:
    IF isHovered:
      animate card:
        y: 0px → -20px      // Elevation
        scale: 1 → 1.05
        duration: 0.3s spring
      
      animate shadow:
        blur: 20px → 40px
        spread: 0px → 20px
        color opacity: 0.1 → 0.4
      
      animate background:
        border-color: rgba(0,255,255,0.2) → rgba(0,255,255,0.4)
        boxShadow: "0 0 20px" → "0 0 40px + inset effects"
      
      // Black hole warp effect (clip-path animation)
      animate warpOverlay:
        animation: black-hole-warp 3s infinite
    ELSE:
      animate card:
        y: -20px → 0px
        scale: 1.05 → 1
        duration: 0.3s spring
      
      animate shadow/borders back to normal
  
  OUTPUT: Elevated card with enhanced glow and warp effect

ALGORITHM ModalExpansion:
  INPUT: onClick event
  
  PROCESS:
    // Create portal overlay
    showModal = true
    
    animate modal:
      initial:
        opacity: 0
        scale: 0.8
      animate:
        opacity: 1
        scale: 1
      transition:
        duration: 0.4s spring
    
    // Warp card into modal (distortion effect)
    animate cardInModal:
      filter: "distortion wave"
      duration: 0.6s
    
    // Embed project demo/content
    loadProjectContent()
    
    // Fade backdrop
    animate backdrop:
      opacity: 0 → 0.7
      backdropFilter: "blur(5px)"
  
  OUTPUT: Expanded card view with portal effect
```

### CommsArray - Form Interactions & Signal Waves

```typescript
/**
 * PSEUDOCODE: CommsArray Signal Transmission
 * 
 * Contact form with signal wave feedback and transmission theme
 */

ALGORITHM FormFocusAnimation:
  INPUT: focusedField string (or null)
  
  PROCESS:
    FOR each inputField:
      IF inputField.name == focusedField:
        animate inputField:
          boxShadow: "0 0 20px" → "0 0 40px rgba(0,255,255,0.4)"
          borderColor: rgba(0,255,255,0.2) → rgba(0,255,255,0.6)
          background: rgba(0,255,255,0.05) → rgba(0,255,255,0.1)
          duration: 0.3s ease
        
        animate label:
          color: "default" → "#00ffff"
          textShadow: "none" → "0 0 10px #00ffff"
      ELSE:
        animate inputField:
          boxShadow: "0 0 20px" → "0 0 10px"
          borderColor: rgba(0,255,255,0.2)
          background: rgba(0,255,255,0.05)
  
  OUTPUT: Focused field glows with cyan neon

ALGORITHM SignalWaveTransmission:
  INPUT: onSubmit event
  
  PROCESS:
    // Trigger signal wave animation
    setSignalWave = true
    
    FOR wave = 1 TO 2:
      animate wave:
        scale: 1 → 1.3
        opacity: 0.8 → 0
        duration: 1.5s ease-out
        delay: (wave - 1) * 0.2s
    
    // Disable form temporarily
    formInputs.disabled = true
    submitButton.disabled = true
    
    // Submit data (async)
    response = await submitForm(formData)
    
    // Show success overlay
    IF response.success:
      setSubmitted = true
      
      animate successOverlay:
        opacity: 0 → 1
        duration: 0.3s
      
      animate checkmark:
        scale: 0.8 → 1
        rotate: 0deg → 360deg + small bounces
        duration: 0.6s spring
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        animate successOverlay:
          opacity: 1 → 0
          duration: 0.4s
        
        resetForm()
      }, 3000)
  
  OUTPUT: Signal wave animation with success confirmation

ALGORITHM FormValidation:
  INPUT: formData Object
  
  PROCESS:
    VALIDATE:
      name.length >= 2
      email matches EMAIL_REGEX
      message.length >= 10
    
    IF all valid:
      submitButton:
        opacity: 1
        pointerEvents: auto
        cursor: pointer
    ELSE:
      submitButton:
        opacity: 0.5
        pointerEvents: none
        cursor: not-allowed
    
    // Show field-specific errors
    FOR each field with error:
      animate field:
        borderColor: "cyan" → "red"
        boxShadow: "cyan glow" → "red glow"
      
      showErrorMessage(field)
  
  OUTPUT: Real-time validation with visual feedback
```

---

## Three.js Integration

### Mesh Setup Pattern

```typescript
/**
 * Three.js Mesh Initialization Pattern
 * 
 * Common for all 3D components (Orb, Card background, Hero elements)
 */

PATTERN ThreeJsMeshSetup:
  STEP 1: Create Geometry
    geometry = new IcosahedronGeometry(radius, complexity)
    // Alternative geometries:
    // - BoxGeometry for cards
    // - SphereGeometry for simple orbs
    // - TorusGeometry for rings
  
  STEP 2: Create Material
    material = new MeshPhongMaterial({
      color: "#00ffff",
      emissive: "#00ffff",
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false  // or true for grid effect
    })
  
  STEP 3: Create Mesh
    mesh = new Mesh(geometry, material)
    mesh.scale.set(1.5, 1.5, 1.5)
  
  STEP 4: Animation Loop (useFrame)
    useFrame((state) => {
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.008
      
      // Update material properties
      material.emissiveIntensity = 
        0.6 + Math.sin(state.clock.getElapsedTime()) * 0.2
    })
  
  STEP 5: Lighting
    ambientLight = new AmbientLight(0xffffff, 0.4)
    pointLight = new PointLight("#00ffff", intensity=2, distance=10)
    pointLight.position.set(5, 5, 5)
  
  OUTPUT: Animated, glowing 3D mesh

PATTERN DistortionMaterial:
  // For morphing, wave-like effects
  
  material = new MeshDistortMaterial({
    color: "#00ffff",
    distort: 0.5,
    speed: 1.9,
    roughness: 0.2,
    metalness: 0.8
  })
  
  // Animate distortion
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    material.distort = 0.28 + Math.sin(t * 1.2) * 0.12
  })
```

---

## Physics Simulation

### Simplified Physics (without Cannon.js)

```typescript
/**
 * PSEUDOCODE: Simplified Physics Simulation
 * 
 * For performance, we use Framer Motion springs + manual calculations
 * Full Cannon.js physics can be added for advanced interactions
 */

ALGORITHM VelocityBasedMovement:
  INPUT: currentPos, targetPos, friction=0.85
  
  PROCESS:
    // Calculate velocity
    velocity = targetPos - currentPos
    
    // Apply damping (friction)
    velocity *= friction
    
    // Update position
    newPos = currentPos + velocity
    
    // Check bounds
    IF newPos.x < 0 or newPos.x > viewport.width:
      velocity.x *= -0.8  // Bounce with energy loss
    IF newPos.y < 0 or newPos.y > viewport.height:
      velocity.y *= -0.8
    
    OUTPUT: newPos with damped movement

ALGORITHM CollisionDetection:
  INPUT: orb1, orb2
  
  PROCESS:
    distance = length(orb2.pos - orb1.pos)
    minDistance = orb1.radius + orb2.radius
    
    IF distance < minDistance:
      // Collision detected
      overlap = minDistance - distance
      
      // Push orbs apart
      direction = normalize(orb2.pos - orb1.pos)
      orb1.pos -= direction * overlap * 0.5
      orb2.pos += direction * overlap * 0.5
      
      // Exchange momentum
      orb1.velocity *= 0.9
      orb2.velocity *= 0.9
    
    OUTPUT: Updated positions with collision response

ALGORITHM GravitationalPull:
  INPUT: orbPosition, cursorPosition, radius=300
  
  PROCESS:
    distance = length(cursorPosition - orbPosition)
    
    IF distance < radius:
      // Calculate pull strength
      pullStrength = 1 - (distance / radius)
      
      // Direction toward cursor
      direction = normalize(cursorPosition - orbPosition)
      
      // Pull force
      pullForce = direction * pullStrength * 0.3  // Adjust multiplier
      
      // Apply with spring physics (Framer Motion)
      animate orb:
        x: orbPosition.x + pullForce.x * 100
        y: orbPosition.y + pullForce.y * 100
        transition:
          type: "spring"
          stiffness: 100
          damping: 15
    
    OUTPUT: Smoothly pulled orb toward cursor
```

---

## Animation Patterns

### Spring Animation Pattern

```typescript
/**
 * Framer Motion Spring Animation Pattern
 * 
 * Used throughout for organic, natural-feeling animations
 */

// Gentle spring (for large elements)
animate element:
  transition:
    type: "spring"
    stiffness: 60
    damping: 15
    mass: 1

// Responsive spring (for interactive elements)
animate element:
  transition:
    type: "spring"
    stiffness: 300
    damping: 25
    mass: 0.5

// Snappy spring (for quick feedback)
animate element:
  transition:
    type: "spring"
    stiffness: 500
    damping: 20
    mass: 0.3

// Keyframe animation pattern
animate element:
  initial: { opacity: 0, y: 40 }
  animate: { opacity: 1, y: 0 }
  exit: { opacity: 0, y: 40 }
  transition:
    type: "spring"
    stiffness: 60
    damping: 18
    delay: index * 0.1s

RULE: Higher stiffness = snappier, lower = more fluid
RULE: Higher damping = less bounce, lower = more oscillation
```

### Gesture Animation Pattern

```typescript
/**
 * Gesture Interaction Pattern
 * 
 * Coordinates animation with user input
 */

PATTERN HoverGlow:
  whileHover:
    scale: 1.1
    boxShadow: "0 0 30px #00ffff"
    transition: 0.3s
  
  whileTap:
    scale: 0.95
    transition: 0.1s spring

PATTERN DragAnimation:
  drag: true
  dragElastic: 0.2
  onDrag: (event, info) => {
    // Update position
    setPos({ x: info.offset.x, y: info.offset.y })
  }
  onDragEnd: (event, info) => {
    // Snap to grid or final position
    animate final position
  }
```

---

## State Management

### Global Context Pattern

```typescript
/**
 * Theme & Settings Context
 * 
 * Manages cosmic theme, accessibility settings, animation preferences
 */

CONTEXT AntiGravityContext:
  PROPERTIES:
    - theme: 'cosmic' | 'light' | 'dark'
    - prefersReducedMotion: boolean
    - contrastMode: 'normal' | 'high'
    - cursorPosition: { x, y }
    - activeSection: string
    - particlesEnabled: boolean
    - performanceMode: 'low' | 'medium' | 'high'
  
  METHODS:
    setTheme(theme)
    setCursorPosition(x, y)
    setActiveSection(section)
    toggleParticles()
    setPerformanceMode(mode)
  
  USAGE:
    const { cursorPosition, prefersReducedMotion } = useAntiGravity()
    
    // Skip animations if reduced motion is enabled
    IF prefersReducedMotion:
      skip animations
      render static version
```

### Section State Management

```typescript
PATTERN SectionState:
  USE LOCAL STATE for:
    - Form input values
    - Hover/focus states
    - Modal open/close
    - Animation progress
  
  USE CONTEXT for:
    - Global cursor position
    - Theme settings
    - Accessibility preferences
    - Performance metrics
  
  USE URL PARAMS for:
    - Active section
    - Scroll position (on reload)
    - Shared state between routes
```

---

## Performance Considerations

### Optimization Techniques

```typescript
/**
 * PERFORMANCE PATTERNS
 */

TECHNIQUE 1: Frame Skipping (Low-End Devices)
  IF devicePerformance == 'low':
    frameSkip = 3
    frameCount = 0
    
    useFrame(() => {
      frameCount++
      IF frameCount % frameSkip != 0: return
      // Perform updates
    })

TECHNIQUE 2: Lazy Loading
  const FloatingOrb = lazy(() => import('./FloatingOrb'))
  const GravitationalHero = lazy(() => import('./GravitationalHero'))
  
  <Suspense fallback={<LoadingSpinner />}>
    <FloatingOrb />
  </Suspense>

TECHNIQUE 3: Memoization
  const FloatingOrb = memo(FloatingOrbComponent)
  
  // Only re-render if props change
  // Prevents unnecessary Three.js re-renders

TECHNIQUE 4: WebWorker for Calculations
  // Offload expensive calculations to web worker
  worker = new Worker('physics-worker.js')
  worker.postMessage({ orbs: orbPositions })
  worker.onmessage = (newPositions) => {
    updateOrbPositions(newPositions)
  }

TECHNIQUE 5: LOD (Level of Detail)
  IF distanceFromViewport > 1000:
    renderSimplifiedGeometry()
  ELSE IF distanceFromViewport > 500:
    renderMediumDetailGeometry()
  ELSE:
    renderFullDetailGeometry()

TARGET METRICS:
  - FCP (First Contentful Paint): < 1.5s
  - LCP (Largest Contentful Paint): < 2.5s
  - CLS (Cumulative Layout Shift): < 0.1
  - TTI (Time to Interactive): < 3.5s
  - Average frame rate: 60 FPS (never below 48 FPS)
```

---

## Deployment Checklist

- [ ] All animations respect `prefers-reduced-motion`
- [ ] Keyboard navigation works for all interactive elements
- [ ] ARIA labels present on buttons and regions
- [ ] Images have alt text
- [ ] Performance metrics within targets
- [ ] Mobile responsive (tested on < 480px, < 768px, < 1024px)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Dark/light theme toggle works
- [ ] High-contrast mode tested
- [ ] Form submission works with validation
- [ ] Console clean of errors/warnings
- [ ] Asset sizes optimized
- [ ] Lazy-loading implemented for heavy components

