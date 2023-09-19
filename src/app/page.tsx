import Link from 'next/link'

import RevalidateButton from '@/components/RevalidateButton'
import CityWeatherText from '@/components/CityWeatherText'

import style from './style.module.css'

export default async function Home() {
  const cities = [
    { name: '서울', code: 'seoul' },
    { name: '뉴욕', code: 'NYC' },
    { name: '런던', code: 'london' },
  ]

  return (
    <>
      <h1>날씨 앱</h1>
      <RevalidateButton tag="time" />
      <ul className={style.list}>
        {cities.map((city) => {
          const path = `/${city.code}?name=${city.name}`
          return (
            <li key={city.name}>
              {city.name} / <CityWeatherText cityCode={city.code} />(
              <Link href={path}>예보 확인</Link>)
            </li>
          )
        })}
      </ul>
    </>
  )
}
