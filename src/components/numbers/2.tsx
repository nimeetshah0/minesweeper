import { SvgProps } from "../../util/types";

export const Number2 = (props: SvgProps) => {
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
        d="M1 0h4M0 1h6M0 2h2M4 2h2M4 3h2M1 4h5M0 5h6M0 6h2M0 7h2M0 8h6M0 9h6"
      />
    </svg>
  );
};
