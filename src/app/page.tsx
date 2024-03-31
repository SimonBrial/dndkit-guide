import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import ContainerApp from "../components/ContainerApp";

export default function Home() {
  return (
    <main className="h-screen bg-slate-50">
      <MantineProvider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ContainerApp />
        </main>
      </MantineProvider>
    </main>
  );
}
