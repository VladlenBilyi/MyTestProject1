import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";

import { Store } from "../../../../store";

import { getExams } from "../../actions.api";
import { allExamsSelector } from "../../selectors";

import { ExamItem } from "../ExamItem/ExamItem";

const mapStateToProps = (state: Store) => ({
  allExams: allExamsSelector(state)
});

const mapDispatchToProps = {
  getExams
};

type ModelProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type InjectedProps = ModelProps & DispatchProps;

interface Props {}

export const ExamsPanelUnconnected: React.FC<Props> = props => {
  const { allExams } = props as InjectedProps;
  return (
    <div style={{ width: "100%" }}>
      <div style={{ padding: "25px" }}>
        <h3 className="main-text">Расписание экзаменов</h3>
        <p className="secondary-text">
          Список всех экзаменов, открытых для записи, а также тех, на которые вы
          записаны
        </p>
      </div>
      <Table>
        <thead>
          <tr>
            <th className="main-text">Дата и время</th>
            <th className="main-text">Квалификация</th>
            <th className="main-text">Уровень</th>
            <th className="main-text">Город</th>
            <th className="main-text">Статус</th>
          </tr>
        </thead>
        <tbody>
          {allExams.map(exam => (
            <ExamItem {...exam} key={exam.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export const ExamsPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamsPanelUnconnected);
