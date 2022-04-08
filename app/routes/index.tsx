import { useLoaderData } from '@remix-run/react';

export async function loader() {
  const body = await fetch('http://www.as.wvu.edu/~lbrady/howto.html');
  const res = new Response(await body.text(), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    }
  });
  return res.text();
}

export default function Index() {
  const res = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Pckl</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
      </ul>
      <div>{res}</div>
    </div>
  );
}
