import Image from 'next/image'
import { getTime } from '@/utils/getTime'

type Props = {
  timeZone: string
  conditionText: string
  conditionIcon: string
}

export default async function CurrentWeatherCondition({
  timeZone,
  conditionText,
  conditionIcon,
}: Props) {
  const time = await getTime(timeZone)
  const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`

  return (
    <>
      <span>{timeText} / </span>
      <span>{conditionText}</span>
      <Image
        src={`https:${conditionIcon}`}
        alt={conditionText}
        width={16}
        height={16}
      />
    </>
  )
}
