import { SvgProps } from "../../util/types";

export const Number7 = (props: SvgProps) => {
  const { width = 20, height = 20 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 8 10"
      width={width}
      height={height}
      shape-rendering="crispEdges"
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#ac3232"
        d="M0 0h8M0 1h8M6 2h2M5 3h2M5 4h2M4 5h2M4 6h2M4 7h2M4 8h2M4 9h2"
      />
    </svg>
  );
};
