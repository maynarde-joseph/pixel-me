import ArtworkPanel from "./(components)/ArtworkPanel";
import ColorPickerComponent from "./(components)/ColorPickerComponent";
import Editor from "./(components)/Editor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to NextPixel-ME</div>
      <div className="flex flex-row gap-4 items-center justify-between">
        <Editor />
        <ColorPickerComponent />
      </div>
    </main>
  );
}
