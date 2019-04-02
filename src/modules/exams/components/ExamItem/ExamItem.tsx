import React from "react";
import { format } from "date-fns";

import styles from "./ExamItem.module.scss";

interface Props {
  date: string;
  qualificationTitle: string;
  qualificationLevel: number;
  status: string;
  city: string;
  address: string;
}

export const ExamItem: React.FC<Props> = ({
  date,
  qualificationTitle,
  qualificationLevel,
  status,
  city,
  address
}) => {
  const mainTextClassName = `main-text`;
  const secondaryTextClassName = `secondary-text`;
  return (
    <tr className={styles.wrapper}>
      <td className={mainTextClassName}>{format(date, `DD.MM.YYYY в H:mm`)}</td>
      <td>
        <div className="mb-3">
          <span className={mainTextClassName}>{qualificationTitle}</span>
        </div>
        <div className={secondaryTextClassName}>Адрес {address}</div>
      </td>
      <td className={mainTextClassName}>{qualificationLevel}</td>
      <td className={mainTextClassName}>{city}</td>
      <td>
        {status === "isApplying" ? (
          <span className={styles.applying}>Идёт запись</span>
        ) : (
          <span className={styles.unknown}>Неизвестный статус</span>
        )}
      </td>
    </tr>
  );
};
