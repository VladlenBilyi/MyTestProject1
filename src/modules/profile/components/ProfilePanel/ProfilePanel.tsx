import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { Store } from "../../../../store";

import { getProfile, isFetched } from "../../selectors";
import { localizeSex } from "../../utils";

import { ProfileRow } from "../ProfileRow/ProfileRow";

import styles from "./ProfilePanel.module.scss";

const mapStateToProps = (state: Store) => {
  const { firstName, lastName, sex, birthDate, email, phone } = getProfile(
    state
  );
  return {
    isFetched: isFetched(state),
    firstName,
    lastName,
    sex,
    birthDate,
    email,
    phone
  };
};

type InjectedProps = ReturnType<typeof mapStateToProps>;

export const ProfilePanelUnconnected: React.FC<{}> = props => {
  const {
    isFetched,
    firstName,
    lastName,
    sex,
    birthDate,
    email,
    phone
  } = props as InjectedProps;
  return isFetched ? (
    <div className={styles.wrapper}>
      <ProfileRow name="Имя" value={firstName} />
      <ProfileRow name="Фамилия" value={lastName} />
      <ProfileRow name="Пол" value={localizeSex(sex)} />
      <ProfileRow
        name="Дата рождения"
        value={format(birthDate, `DD.MM.YYYY`)}
      />
      <ProfileRow name="Телефон" value={phone} />
      <ProfileRow name="Email" value={email} />
    </div>
  ) : (
    <div />
  );
};

export const ProfilePanel = connect(mapStateToProps)(ProfilePanelUnconnected);
