import React from "react";

import { Layout } from "../../modules/dashboard/components/Layout/Layout";
import { Header } from "../../modules/dashboard/components/Header/Header";
import { ProfilePanel } from "../../modules/profile/components/ProfilePanel/ProfilePanel";

export const ProfilePage: React.FC<{}> = props => {
  return (
    <Layout Header={<Header>Профиль</Header>} Content={<ProfilePanel />} />
  );
};
