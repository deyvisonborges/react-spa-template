/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconViteLogo } from 'assets/icons/logo-vite'
import { Image } from './Image'

const icons = {
  iconViteLogo: IconViteLogo
}

type AssetsProps = {
  alt: string
}

export const Assets = ({ ...restProps }: AssetsProps) => {
  return <Image src={''} {...restProps} />
}
