import Image from 'next/image'
import { getCurrentWeather } from '@/utils/getCurrentWeather'
import { getTime } from '@/utils/getTime'

type Props = {
  cityCode: string
}

export default async function CityWeatherText({ cityCode }: Props) {
  const { current, location } = await getCurrentWeather(cityCode)
  const time = await getTime(location.tz_id)
  const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`

  return (
    <>
      <span>{timeText} / </span>
      <span>{current.condition.text}</span>
      <Image
        src={`https:${current.condition.icon}`}
        alt={current.condition.text}
        width={16}
        height={16}
      />
    </>
  )
}
