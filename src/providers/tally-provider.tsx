"use client";

import {useEffect} from "react";

type Props = {
  children: React.ReactNode;
};

const TallyProvider = ({children}: Props) => {
  useEffect(() => {
    // @ts-ignore
    window.TallyConfig = {
      formId: "PdRMYQ",
      popup: {
        emoji: {
          text: "👋",
          animation: "wave",
        },
        open: {
          trigger: "time",
          ms: 118000,
        },
        hideTitle: true,
        overlay: true,
        autoClose: 2000,
        showOnce: true,
      },
    };
  }, []);

  return (
    <>
      <script async src="https://tally.so/widgets/embed.js" />
      {children}
    </>
  );
};

export default TallyProvider;
