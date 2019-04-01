import React from "react";

import { Layout } from "../../modules/dashboard/components/Layout/Layout";
import { Header } from "../../modules/dashboard/components/Header/Header";
import { ExamsPanel } from "../../modules/exams/components/ExamsPanel/ExamsPanel";

export const ExamsPage: React.FC<{}> = props => {
  return (
    <Layout
      Header={<Header>Экзамены</Header>}
      Content={<ExamsPanel />}
    />
  );
};
