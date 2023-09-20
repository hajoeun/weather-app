import { getCurrentWeather } from '@/utils/getCurrentWeather'
import CurrentWeatherCondition from './CurrentWeatherCondition'
import Link from 'next/link'

type Props = {
  cityName: string
  cityCode: string
}

export default async function CurrentWeatherItem({
  cityName,
  cityCode,
}: Props) {
  const { current, location } = await getCurrentWeather(cityCode)
  const path = `/${cityCode}?name=${cityName}`

  return (
    <li key={cityName}>
      {cityName} -{' '}
      <CurrentWeatherCondition
        timeZone={location.tz_id}
        conditionText={current.condition.text}
        conditionIcon={current.condition.icon}
      />
      (<Link href={path}>예보 확인</Link>)
    </li>
  )
}
