import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const sprites = [
  "male",
  "female",
  "human",
  "initials",
  "avataaars",
  "jdenticon",
  "gridy",
  "adventurer",
  "adventurer-neutral",
  "big-ears",
  "big-ears-neutral",
  "big-smile",
  "bottts",
  "croodles",
  "croodles-neutral",
  "identicon",
  "micah",
  "miniavs",
  "open-peeps",
  "personas",
  "pixel-art",
];

export default function Home() {
  const [imgUrl, setImgUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedSprite, setSelectedSprite] = useState(sprites[0]);

  const handleInputChange = (e) => {
    setInputValue(() => {
      if (e.target.value.length > 0) {
        setImgUrl(
          `https://avatars.dicebear.com/api/${selectedSprite}/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };

  const handleSpriteChange = (e) => {
    setSelectedSprite(() => {
      if (e.target.value.length > 0) {
        setImgUrl(`https://avatars.dicebear.com/api/${e.target.value}/${inputValue}.svg`);
      }
      return e.target.value;
    });
  };
  return (
    <div className="flex flex-col items-center justify-center bg-sky-500 h-screen">
      <Head>
        <title>avatar-generator</title>
      </Head>
      <div className="flex flex-col items-center bg-white h-[330px] rounded-md md:px-16">
        <h1 className="font-mono uppercase tracking-widest text-xs text-sky-900 hover:text-sky-600 mt-2">
          avatar generator
        </h1>
        <div className="flex items-center mt-4 md:mt-5 px-2 md:px-0">
          <select
            onChange={handleSpriteChange}
            className="cursor-pointer focus:outline-none border-solid border border-gray-500 py-[7.3px] md:py-[1.03rem] px-1 md:px-2 text-gray-500 hover:bg-gray-500 hover:text-white rounded-bl-[6px] rounded-tl-[6px]"
          >
            {sprites.map((sprite, index) => (
              <option value={sprite} key={index}>
                {sprite}
              </option>
            ))}
          </select>
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            placeholder="your-custom-seed"
            className="text-black py-[7px] md:py-[1rem] px-2 md:px-6 focus:outline-none border-solid border border-gray-500 border-l-0 rounded-br-[6px] rounded-tr-[6px]"
          />
        </div>
        <div className="object-cover mt-8 border-solid border border-gray-500">
          {imgUrl && <Image src={imgUrl} width={250} height={170} />}
        </div>
      </div>
    </div>
  );
}
