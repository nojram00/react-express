import { usePage } from "../providers/page";

export default function Home() {
  const page = usePage();

  return (
    <>
      <h1>{page.data?.message}</h1>
      <ul>
        {page.data?.users &&
            (page.data.users || []).map((user: string, idx: number) => (
            <li key={idx}>{user}</li>
            ))}
      </ul>
    </>
  );
}
