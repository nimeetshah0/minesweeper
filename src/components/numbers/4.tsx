import { SvgProps } from "../../util/types";

export const Number4 = (props: SvgProps) => {
  const { width = 20, height = 20 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 6 10"
      width={width}
      height={height}
      shape-rendering="crispEdges"
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#ac3232"
        d="M0 0h2M4 0h2M0 1h2M4 1h2M0 2h2M4 2h2M0 3h2M4 3h2M0 4h6M4 5h2M4 6h2M4 7h2M4 8h2M4 9h2"
      />
    </svg>
  );
};
