import type { FC } from 'react'

import Banner from '@components/screens/Home/Banner'
import AboutUs from '@components/screens/Home/AboutUs'
import News from '@components/screens/Home/News'
import Partners from '@components/screens/Home/Partners'
import Support from '@components/screens/Home/Support'


const Home: FC = () => (
  <div>
    <Banner />
    <AboutUs />
    <News></News>
    <Partners></Partners>
    <Support></Support>
  </div>
)

export default Home
