import type { FC } from 'react'

import { SecondaryButton } from '@components/ui/Buttons/CustomButton'


import sharedStyles from './Support.module.scss'


const SupportCTA: FC = () => (
  <div className={sharedStyles["support-info"]}>
    <p className={sharedStyles["support-text"]}>
      Підтримайте Спільноту та подбайте про щасливе майбутнє молоді!
    </p>
    <SecondaryButton type="link" className={sharedStyles["support-button"]} href="/Support">
      Підтримати
    </SecondaryButton>
  </div>
)

export default SupportCTA
