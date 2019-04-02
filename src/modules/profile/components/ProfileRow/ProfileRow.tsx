import React from "react";

interface Props {
  name: string;
  value: string;
}

export const ProfileRow: React.FC<Props> = ({ name, value }) => (
  <div className="mb-3">
    <span className="main-text">{name}: </span>
    <span className="secondary-text">{value}</span>
  </div>
);
