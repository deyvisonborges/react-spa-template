import * as s from './styles'

type ImageProps = {
  src: string
  alt: string
}

export function Image({ src, alt, ...restProps }: ImageProps) {
  return <s.Image src={src} alt={alt} {...restProps} />
}
