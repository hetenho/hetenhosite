export default function Icon({ name, height = 16 }: { name: string, height?: number }) {
  return <img src={`/public/${name}.svg`} alt="github" width="16" height={height} />
}
