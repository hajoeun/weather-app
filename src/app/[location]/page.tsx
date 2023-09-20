import CurrentWeatherCondition from '@/components/CurrentWeatherCondition'
import ForecastItem from '@/components/ForecastItem'
import HomeButton from '@/components/HomeButton'
import RevalidateButton from '@/components/RevalidateButton'
import { getForecast } from '@/utils/getForecast'

import style from './style.module.css'

type Props = {
  params: {
    location: string
  }
  searchParams: {
    name: string
  }
}

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨를 알려드립니다`,
  }
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name
  const { location, current, forecast } = await getForecast(params.location)

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <div className={style.buttonGroup}>
        <HomeButton />
        <RevalidateButton tag="time" />
      </div>
      <div className={style.header}>
        <span>현재 날씨 -</span>{' '}
        <CurrentWeatherCondition
          timeZone={location.tz_id}
          conditionText={current.condition.text}
          conditionIcon={current.condition.icon}
        />
      </div>
      <ul>
        {forecast.forecastday.map((day) => (
          <ForecastItem
            key={day.date}
            date={day.date}
            temperature={day.day.avgtemp_c}
            conditionText={day.day.condition.text}
            conditionIcon={day.day.condition.icon}
          />
        ))}
      </ul>
    </>
  )
}
