export default function Icon({ name, height = 16 }: { name: string, height?: number }) {
  return <img src={`/${name}.svg`} alt="github" width={height} height={height} />
}
