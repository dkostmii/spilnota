import type { FC } from 'react';
import type IBankDetails from '@interfaces/IBankDetails';

import CopyInput from '@components/ui/CopyInput';

import styles from './BankDetails.module.scss';

import bankDetailsCaptions from '@data/bankDetails.json';
const linesCaptions = bankDetailsCaptions.lines;

interface Props {
  data: IBankDetails;
}

const BankDetails: FC<Props> = ({ data }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h2 className={styles.title}>{bankDetailsCaptions.title}</h2>
        <div className={styles.lines}>
          <div className={styles.line}>
            <h3>{linesCaptions.subject}</h3>
            <CopyInput value={data.subject} />
          </div>
          <div className={styles.line}>
            <h3>{linesCaptions.organizationCode}</h3>
            <CopyInput value={data.organizationCode} />
          </div>
          <div className={styles.line}>
            <h3>{linesCaptions.address}</h3>
            <CopyInput value={data.address} />
          </div>
          <div className={styles.line}>
            <h3>{linesCaptions.bankAccount}</h3>
            <CopyInput value={data.bankAccount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
