import type { FC } from 'react'

import CopyInput from '@components/ui/CopyInput'

import bankDetailsData from '@data/bankDetailsData_temp.json'

import styles from './BankDetails.module.scss'

import bankDetailsCaptions from '@data/bankDetails.json'
const linesCaptions = bankDetailsCaptions.lines

const BankDetails: FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h2 className={styles.title}>{bankDetailsCaptions.title}</h2>
        <div className={styles.lines}>
          <div className={styles.line}>
            <h3>{linesCaptions.subject}</h3>
            <CopyInput value={bankDetailsData.subject} />
          </div>
          <div className={styles.line}>
            <h3>{linesCaptions.organizationCode}</h3>
            <CopyInput value={bankDetailsData.organizationCode} />
          </div>
          <div className={styles.line}>
            <h3>{linesCaptions.address}</h3>
            <CopyInput value={bankDetailsData.address} />
          </div>
          <div className={styles.line}>
            <h3>{linesCaptions.bankAccount}</h3>
            <CopyInput value={bankDetailsData.bankAccount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankDetails
