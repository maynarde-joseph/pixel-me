import ColorPickerComponent from "./(components)/ColorPickerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to NextPixel-ME</div>
      <ColorPickerComponent />
    </main>
  );
}
