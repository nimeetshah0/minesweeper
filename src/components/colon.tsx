import { SvgProps } from "../util/types";

export const Colon = (props: SvgProps) => {
  const { width = 20, height = 20 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 2 6"
      width={width}
      height={height}
      shape-rendering="crispEdges"
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path stroke="#ac3232" d="M0 0h2M0 1h2M0 4h2M0 5h2" />
    </svg>
  );
};
