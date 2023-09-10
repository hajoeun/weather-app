'use client'

import revalidate from '@/utils/revalidate'

type Props = {
  tag: string
}

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await revalidate(tag)
  }

  return <button onClick={handleClick}>캐시 비우기</button>
}
