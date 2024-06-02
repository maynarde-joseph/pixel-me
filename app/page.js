import ArtworkPanel from "./(components)/ArtworkPanel";
import ColorPickerComponent from "./(components)/ColorPickerComponent";
import Editor from "./(components)/Editor";
import { MainPanel } from "./(components)/MainPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to NextPixel-ME</div>
      <MainPanel />
    </main>
  );
}
