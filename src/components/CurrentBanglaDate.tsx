"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () =>
  new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(new Date());
const getServerSnapshot = () => "";

export default function CurrentBanglaDate() {
  const date = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{date}</>;
}