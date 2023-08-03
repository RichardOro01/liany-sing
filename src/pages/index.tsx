import React from "react";
import { store } from "../core/stores/store";
import { Provider } from "react-redux";
import Layout from "@/components/Layout";

export type Scene = "" | "hello" | "singing" | "question";

export default function Home() {
  return (
    <Provider {...{ store }}>
      <main className={`min-h-screen flex-col items-center justify-between`}>
        <Layout />
      </main>
    </Provider>
  );
}
