import ArtworkPanel from "./(components)/ArtworkPanel";
import ColorPickerComponent from "./(components)/ColorPickerComponent";
import Editor from "./(components)/Editor";
import { MainPanel } from "./(components)/MainPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-1 text-xl">Welcome to NextPixel-ME</div>
      <i className="text-sm">
        I am currently working on OpenCV image recognition. <br></br> My goal is
        to allow users to upload an image and then I<br></br> will produce an
        image based off their image.<br></br> Users can then edit the image and
        then download it <br></br>when they are happy.
      </i>
      <MainPanel />
    </main>
  );
}
