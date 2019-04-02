import React from "react";

interface Props {
  width: number;
  height: number;
  fill: string;
}

export const HeaderIcon: React.FC<Props> = ({
  width,
  height,
  fill = "#FFF"
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"
    />
  </svg>
);
