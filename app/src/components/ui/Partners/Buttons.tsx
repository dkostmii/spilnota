import type { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { PrimaryButton, GhostButton } from '@components/ui/Buttons/CustomButton'

import styles from './Partners.module.scss'

const Buttons: FC = () => {
  const { pathname } = useLocation()

  const showMorePartnersLink = !pathname.endsWith("partners")

  return (
    <div className={styles["partners-buttons"]}>
      {showMorePartnersLink && (
        <GhostButton type="route-link" className={styles["more-partners-link"]} to="/Partners">
          Дивитись більше
        </GhostButton>
      )}
      <PrimaryButton type="link" className={styles["become-partner-btn"]}>
        Стати партнером
      </PrimaryButton>
    </div>
  )
}
export default Buttons
