import React from "react";

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
  return (
    <div className={styles.wrapper}>
      <div>
        <span>{date}</span>
        <span>{qualificationTitle}</span>
        <span>{qualificationLevel}</span>
        <span>{city}</span>
        <span>{status}</span>
      </div>
      <div>{address}</div>
    </div>
  );
};
