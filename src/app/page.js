"use client";

import Header from "./components/Header";
import Text from "./Text";
import Card from "./Card";
import Text2 from "./Text2";
import FinalCTA from "./FinalCTA";

export default function Home() {
  const headerProps = {
    background: "/images/weekend-blueback.jpg",
    watermarkText: "The WEEKND",
    watermarkOpacity: 0.2,
    caption: (
      <div className="text-lg md:text-2xl font-light">
        <span className="italic">The Weeknd’s evolution :</span>{" "}
        <span className="italic underline decoration-4 underline-offset-8 decoration-indigo-400">
          A Canadian singer-songwriter, record producer,
        </span>{" "}
        and actor.
      </div>
    ),
  };

  const textProps = {
    title: (
      <>
        THE <span className="italic">(R&B)</span> KING
      </>
    ),
    paragraphs: [
      <>
        <span className="font-bold">The Weeknd</span> began releasing music
        anonymously in 2009. After co-founding the record label
        <span className="italic"> XO,</span> he released three mixtapes—
        <span className="italic">
          {" "}
          House of Balloons, Thursday, and Echoes of Silence
        </span>{" "}
        in 2011, and gained recognition for his alternative R&B sound, as well
        as the mystery surrounding his identity.
        <span className="font-semibold"> 2012,</span> He signed with Republic
        Records to reissue the mixtapes into the compilation album Trilogy.
      </>,
      <>
        THE WEEKND began combining his signature{" "}
        <span className="text-indigo-400 underline decoration-4 underline-offset-4">
          alternative R&B sound with a more pop-oriented approach
        </span>{" "}
        on his second
      </>,
      <>
        After a string of collaborations and film soundtrack contributions from
        2013 and 2014, he began combining his{" "}
        <span className="italic text-indigo-400 underline decoration-4 underline-offset-4">
          signature alternative R&B sound with a more pop-oriented
        </span>{" "}
        approach on his second and third studio albums,{" "}
        <span className="italic">
          Beauty Behind the Madness (2015) and Starboy (2016)
        </span>
        ; both debuted atop the US Billboard 200 while spawning the Billboard
        Hot 100 number-one singles "Can't Feel My Face", "The Hills", "Starboy",
        and "Die for You".
      </>,
    ],
  };

  const cardSingleProps = {
    variant: "single",
    background: "/images/weeknd-hall.jpg",
    chapter: ". R&B KING .",
    titleLead: "He",
    titleBold: "began",
    titleTail: "combining...",
    buttons: [
      {
        label: "Alternative R&B",
        href: "https://en.wikipedia.org/wiki/Alternative_R%26Bhttps://en.wikipedia.org/wiki/Alternative_R%26B",
      },
      { label: "( pop-oriented )", href: "https://en.wikipedia.org/wiki/Pop_music" },
    ],
    overlay: 0.4,
  };

  const text2Props = {
    heading: (
      <>
        After 2018, he retured to <br />
        <span className="text-indigo-400 underline decoration-4 underline-offset-4">
          a more alternative R&B-dominated soundscape
        </span>
        <br />
        for his debut extended plays.
      </>
    ),
    buttons: [
      {
        label: ">Album: My Dear Melancholy",
        href: "https://en.wikipedia.org/wiki/My_Dear_Melancholy",
      },
      {
        label: ">Song: Call Out My Name",
        href: "https://youtu.be/M4ZoCHID9GI?si=8iVc01L1mYgPqNSg#press",
      },
    ],
    paragraphs: [
      <>
        He returned to a more alternative R&B-dominated soundscape for his debut
        extended play, <span className="italic">My Dear Melancholy (2018)</span>
        , which included the US top-ten single "Call Out My Name". He started
        making an album trilogy named after three chronologic time points and{" "}
        <span className="text-indigo-400 underline decoration-4 underline-offset-4">
          and explored the dream pop and new wave genres
        </span>{" "}
        with the trilogy's first installment and fourth studio album
      </>,
      <>
        <span className="italic">After Hours (2020)</span>, which spawned the
        chart-topping singles "Heartless" and "Save Your Tears", as well as
        "Blinding Lights", which became{" "}
        <span className="text-indigo-400 underline decoration-4 underline-offset-4">
          the best-performing song
        </span>{" "}
        in the Billboard Hot 100's history{" "}
        <span className="text-indigo-400 underline decoration-4 underline-offset-4">
          and the longest-charting song
        </span>
        at the time.
      </>,
      <>
        The Weeknd began{" "}
        <span className="text-indigo-400 underline decoration-4 underline-offset-4">
          exploring dance-pop
        </span>
        , leading to the second installment and fifth album,{" "}
        <span className="italic">Dawn FM (2022)</span>, which included the US
        top-ten single, "Take My Breath".
      </>,
    ],
  };

  const cardTwoProps = {
    variant: "twoColumn",
    background: "/images/takemybreath.jpg",
    chapter: ". Take My Breath .",
    titleLead: "The Weeknd has sold",
    titleBold: "over 75 million records",
    subtitle:
      "It's making him one of the world's best-selling artists. He has earned seven diamond-certifications from the Recording Industry Association of America (RIAA) for his singles",
    buttons: [
      {
        label: ">LISTEN THE SONG",
        href: "https://youtu.be/rhTl_OyehF8?si=sdBlCZ7eGOGCqJuw",
      },
      { label: "( about RIAA )", href: "https://www.riaa.com/gold-platinum/" },
      {
        label: "( HAVE YOU LISTEN THE SONG YET? )",
        href: "https://www.youtube.com/watch?v=rhTl_OyehF8",
      },
    ],
    overlay: 0.35,
  };

  const finalCTAProps = {
    title: (
      <>
        THE{" "}
        <span className="underline decoration-4 underline-offset-8 decoration-indigo-400">
          WEEKND
        </span>
      </>
    ),
    subtitle: (
      <>
        <span className="underline decoration-4 underline-offset-4 decoration-indigo-400">
          A NEW ERA
        </span>{" "}
        OF HIS SONGS.
      </>
    ),
    button: {
      label: "FIND OUT MORE",
      href: "https://aus.xo.store/?utm_campaign=products&utm_medium=referral&utm_source=xo.store",
    },
    footerLinks: [
      { label: "© 2025" },
      { label: "contact", href: "mailto:mso540269@gmail.com" },
      {
        label: "THE WEEKND website",
        href: "https://aus.xo.store/?utm_campaign=products&utm_medium=referral&utm_source=xo.storem",
      },
      { label: "facebook", href: "https://www.facebook.com/theweeknd/" },
      { label: "instagram", href: "https://www.instagram.com/theweeknd/" },
    ],
  };

  return (
    <div>
      <Header {...headerProps} />
      <Text {...textProps} />
      <Card {...cardSingleProps} />
      <Text2 {...text2Props} />
      <Card {...cardTwoProps} />
      <FinalCTA {...finalCTAProps} />
    </div>
  );
}
