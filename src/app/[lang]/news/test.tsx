"use client";
import { useHeaderContent } from "@/core/hooks/useHeaderContent";
import React from "react";

const Test = () => {
  useHeaderContent({
    breadcrumbs: [
      {
        id: 1,
        name: "Yeni elan",
        link: "",
      },
    ],
  });
  return <div>Test</div>;
};

export default Test;
