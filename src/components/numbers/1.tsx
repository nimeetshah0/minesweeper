import { SvgProps } from "../../util/types";

export const Number1 = (props: SvgProps) => {
  const { width = 20, height = 20 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 4 10"
      shape-rendering="crispEdges"
      width={width}
      height={height}
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#ac3232"
        d="M1 0h3M0 1h4M2 2h2M2 3h2M2 4h2M2 5h2M2 6h2M2 7h2M2 8h2M2 9h2"
      />
    </svg>
  );
};
