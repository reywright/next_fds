import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import BoardIcon from "@cbinsights/fds/lib/icons/react/BoardIcon";
import styles from "../styles/Home.module.css";
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  CornerPosition,
  IconButton,
  Popover,
  StackedButton,
  ZeroState,
  TextInput,
  Indicator,
  SeparatorList,
  DropdownButton,
  Flex,
  FlexItem,
  FloatingAction,
  InputGroup,
  Menu,
  MenuItem,
  Radio,
  Tooltip,
  DateInput,
} from "@cbinsights/fds/lib/components";

const Dialog = dynamic(() => import("@cbinsights/fds/lib/components/Dialog"), {
  ssr: false,
});

const Prompt = dynamic(() => import("@cbinsights/fds/lib/components/Dialog"), {
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
            <Avatar name="Samuel Jackson" />

            <Button label="Trigger Dialog" onClick={() => open()} />
            <ButtonGroup
              buttons={[
                { label: "Lorem", disabled: true },
                { label: "Ipsum" },
                { label: "Dolor", isActive: true },
              ]}
            />
            <Checkbox label="I agree to receive spam" name="spam" />
            <CornerPosition decoration={<Badge label="42" />}>
              <Chip label="Hello world" />
            </CornerPosition>
            <ZeroState label="ZeroState label" Icon={BoardIcon} />
            <IconButton label="Add to Board" Icon={BoardIcon} theme="aqua" />
            <FloatingAction
              label="Add to Board"
              Icon={BoardIcon}
              theme="aqua"
            />
            <StackedButton isActive label="I am STACKED" Icon={BoardIcon} />
            <TextInput label="Text Input" value="yeah" />
            <Indicator label="Indicator" />
            <SeparatorList
              items={[
                "New York",
                "Paris",
                "Schenectady",
                "Los Angeles",
                "Hong Kong",
              ]}
              separator="✈️"
            />
            <InputGroup>
              <select name="type">
                <option value="1">Horse-size duck</option>
                <option value="2">Duck-size horse</option>
              </select>
              <input placeholder="Name of pet" type="text" />
              <select name="color">
                <option value="1">Yellow</option>
                <option value="2">Brown</option>
                <option value="2">White</option>
              </select>
            </InputGroup>
            <Menu trigger={<Button hasCaret label="Menu trigger" />}>
              <MenuItem onSelect={() => {}}>Copy</MenuItem>
              <MenuItem onSelect={function noRefCheck() {}}>Delete</MenuItem>
            </Menu>
            <Radio
              value="ok"
              label="I agree to receive spam"
              name="radio-group-name"
              showLabel
            />
            <Flex>
              <FlexItem>
                <DropdownButton>Dropdown Button</DropdownButton>
              </FlexItem>
            </Flex>
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
