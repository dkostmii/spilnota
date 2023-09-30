import type { FC } from 'react'

import Section from '@components/layout/Section'

import Header from './Header';
import Photo from './Photo';
import Concept from './Concept';
import Program from './Program';
import InformationList from './InformationList';

const AboutUs: FC = () => (
  <Section id="AboutUs">
    <Header />
    <Photo />
    <Concept />
    <Program />
    <InformationList />
  </Section>
)

export default AboutUs
