import HomeButton from '@/components/HomeButton'
import { getForecast } from '@/utils/getForecast'

type Props = {
  params: {
    location: string
  }
}

export default async function Detail({ params }: Props) {
  const name = params.location === 'seoul' ? '서울' : ''
  const res = await getForecast(params.location)

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  )
}
