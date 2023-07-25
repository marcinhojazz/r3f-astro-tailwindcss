import { Box } from '@react-three/drei';

export default function Cube() {
  return (
    <>
      <Box position={[0, 0, 0]} rotation-x={[Math.PI * 0.5]} receiveShadow>
        <meshStandardMaterial color="hotpink" />
      </Box>
    </>
  );
}
