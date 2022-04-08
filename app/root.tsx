import type { MetaFunction, LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";
import React from 'react';
import { Navbar } from './Navbar';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Navbar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </React.StrictMode>
  );
}
