import React from "react";
import { connect } from "react-redux";

import { Store } from "../../../../store";

import { getExams } from "../../actionsApi";
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
  const { getExams, allExams } = props as InjectedProps;
  return (
    <div style={{ width: "100%", padding: "15px" }}>
      <button
        onClick={async e => {
          const data = await getExams({
            from: "2019-03-25",
            to: "2029-03-25",
            page: 0,
            pageSize: 10,
            sortOrder: "asc",
            sortField: "id"
          });
          console.log(data);
        }}
      >
        Get exams
      </button>
      <h3>Расписание экзаменов</h3>
      <p>
        Список всех экзаменов, открытых для записи, а также тех, на которые вы
        записаны
      </p>
      {allExams.map(exam => (
        <div key={exam.id}>
          <ExamItem {...exam} />
        </div>
      ))}
    </div>
  );
};

export const ExamsPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamsPanelUnconnected);
