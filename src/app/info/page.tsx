import Greeting from "../components/serverComponent";

export default function Home() {
  return (
    <>
      Info Page
      <Greeting name="server" />
    </>
  );
}
