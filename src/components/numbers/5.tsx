import { SvgProps } from "../../util/types";

export const Number5 = (props: SvgProps) => {
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
        d="M0 0h8M0 1h8M0 2h2M0 3h7M0 4h8M6 5h2M6 6h2M0 7h2M6 7h2M0 8h8M1 9h6"
      />
    </svg>
  );
};
