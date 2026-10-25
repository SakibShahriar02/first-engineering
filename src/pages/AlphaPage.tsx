import AlphaHero from "../components/sections/AlphaHero";
import AlphaStory from "../components/sections/AlphaStory";
import AlphaIdeas from "../components/sections/AlphaIdeas";
import AlphaSpaces from "../components/sections/AlphaSpaces";
import AlphaProcess from "../components/sections/AlphaProcess";
import AlphaContact from "../components/sections/AlphaContact";

export default function AlphaPage() {
  return (
    <div className="alpha-page">
      <div className="alpha-draft-notice" role="note">Draft Alpha identity for review. Photos are style examples and copy is proposed — replace with Alpha&apos;s real projects and details.</div>
      <AlphaHero />
      <AlphaStory />
      <AlphaIdeas />
      <AlphaSpaces />
      <AlphaProcess />
      <AlphaContact />
    </div>
  );
}
