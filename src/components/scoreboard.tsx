import { useEffect, useRef, useState } from "react";
import { Colon } from "./colon";
import { Number0 } from "./numbers/0";
import { Number1 } from "./numbers/1";
import { Number2 } from "./numbers/2";
import { Number3 } from "./numbers/3";
import { Number4 } from "./numbers/4";
import { Number5 } from "./numbers/5";
import { Number6 } from "./numbers/6";
import { Number7 } from "./numbers/7";
import { Number8 } from "./numbers/8";
import { Number9 } from "./numbers/9";

const Background = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 64 16"
      shape-rendering="crispEdges"
    >
      <metadata>
        Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
      </metadata>
      <path
        stroke="#16181e"
        d="M0 0h4M19 1h43M61 2h1M61 3h1M61 4h1M0 5h2M61 5h1M61 6h1M0 7h2M61 7h1M0 8h2M61 8h1M0 9h2M61 9h1M0 10h2M61 10h1M0 11h2M0 12h2M0 13h2M0 14h2M0 15h36M40 15h4"
      />
      <path
        stroke="#222428"
        d="M4 0h4M0 1h2M6 1h13M0 2h2M0 3h2M0 4h2M0 6h2M61 11h1M61 12h1M61 13h1M36 15h4M44 15h8"
      />
      <path
        stroke="#333436"
        d="M8 0h4M2 1h4M3 2h58M3 3h58M3 4h58M3 5h58M3 6h58M3 7h58M3 8h58M3 9h58M3 10h58M3 11h58M3 12h58M3 13h58M53 14h9M52 15h8"
      />
      <path stroke="#3d3e40" d="M12 0h4M2 2h1M2 3h1M2 4h1M41 14h12M60 15h4" />
      <path
        stroke="#4b4c4e"
        d="M16 0h8M2 5h1M2 6h1M2 7h1M2 8h1M2 9h1M62 13h2M23 14h18M62 14h2"
      />
      <path stroke="#616266" d="M24 0h8M62 11h2M62 12h2" />
      <path
        stroke="#727377"
        d="M32 0h32M62 1h2M62 2h2M62 3h2M62 4h2M62 5h2M62 6h2M62 7h2M62 8h2M62 9h2M2 10h1M62 10h2M2 11h1M2 12h1M2 13h1M2 14h21"
      />
    </svg>
  );
};

interface ScoreboardProps {
  flagsPlanted: number;
  isGameOver: boolean;
}

export const Scoreboard = (props: ScoreboardProps) => {
  const { flagsPlanted, isGameOver } = props;
  const [elapsedTime, setElapsedTime] = useState(0);
  const gameTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const convertSecondsToMinutesAndSeconds = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    function stringPadLeft(string: string, pad: string, length: number) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    const finalTime =
      stringPadLeft(minutes.toString(), "0", 2) +
      ":" +
      stringPadLeft(seconds.toString(), "0", 2);

    return finalTime;
  };

  const getComponent = (value: string, size = 30) => {
    switch (value) {
      case "0":
        return <Number0 width={size} height={size} />;
      case "1":
        return <Number1 width={size} height={size} />;
      case "2":
        return <Number2 width={size} height={size} />;
      case "3":
        return <Number3 width={size} height={size} />;
      case "4":
        return <Number4 width={size} height={size} />;
      case "5":
        return <Number5 width={size} height={size} />;
      case "6":
        return <Number6 width={size} height={size} />;
      case "7":
        return <Number7 width={size} height={size} />;
      case "8":
        return <Number8 width={size} height={size} />;
      case "9":
        return <Number9 width={size} height={size} />;
      case ":":
        return <Colon width={size} height={size} />;
    }
  };

  useEffect(() => {
    gameTimer.current = setInterval(() => {
      setElapsedTime((e) => e + 1);
    }, 1000);

    return () => {
      if (gameTimer.current) {
        clearInterval(gameTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isGameOver && gameTimer.current) {
      clearInterval(gameTimer.current);
    }
  }, [isGameOver]);

  return (
    <div
      className="scoreboard"
      style={{
        width: 400,
        height: 100,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Background />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 40px",
          alignItems: "center",
          height: "100%",
          zIndex: 100,
          position: "relative",
        }}
      >
        <div>
          {convertSecondsToMinutesAndSeconds(elapsedTime)
            .split("")
            .map((value) => getComponent(value, 20))}
        </div>
        <div>{getComponent(flagsPlanted.toString(), 30)}</div>
      </div>
    </div>
  );
};
