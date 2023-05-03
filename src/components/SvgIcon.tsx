interface Props {
  prefix?: string
  name: string
  color?: string
  width?: number
  height?: number
}

export function SvgIcon(props: Props) {
  const symbolId = `#${props.prefix ?? 'icon'}-${props.name}`
  const width = `${props.width ?? 1}em`
  const height = `${props.height ?? 1}em`
  return (
    <svg aria-hidden="true" style={{ width, height }}>
      <use xlinkHref={symbolId} fill={props.color} />
    </svg>
  )
}
