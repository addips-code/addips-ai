"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bf253ec2-b9c8-426d-a245-e798391fbad0");
  }, []);

  return null;
};
