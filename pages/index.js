import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { Button } from "@cbinsights/fds/lib/components";

const Dialog = dynamic(() => import("@cbinsights/fds/lib/components/Dialog"), {
  ssr: false,
});

const Toaster = dynamic(
  () => import("@cbinsights/fds/lib/components/Toaster"),
  { ssr: false }
);

export default function Home(props) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const [isToastShowing, setIsToastShowing] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className="margin--top--l">
          <div className="margin--bottom">
            <Button label="Trigger Dialog" onClick={() => open()} />
          </div>
          <Dialog
            isOpen={isOpen}
            content={
              <>
                <p className="margin--bottom">
                  My job is done here, please close me.
                </p>
                <Button label="Ok if you insist." onClick={() => close()} />
              </>
            }
            onDismiss={close}
            title="Dialog works!"
          />
          <div>
            <Button
              onClick={() => setIsToastShowing(!isToastShowing)}
              label={isToastShowing ? "Hide Toaster" : "Show Toaster"}
            />
          </div>
          <Toaster
            isOpen={isToastShowing}
            toastInstance={{
              content: "hey",
              onDismiss: () => setIsToastShowing(false),
              type: "info",
              progress: 42,
              dismissOnAction: true,
              actionLabel: "Action",
            }}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
