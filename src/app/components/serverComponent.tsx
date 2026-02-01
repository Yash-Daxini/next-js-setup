
export default function Greeting({ name }: { name: string }) {
  console.log(`Rendering greeting for ${name} on the server.`);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a Server Component.</p>
    </div>
  );
}
