import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tab from "./Tab";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://picsum.photos/1500/400");
  const [profileUrl, setProfileUrl] = useState("https://picsum.photos/100");

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem] ">
      {/* Background Cover */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white cursor-pointer p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Channel Logo */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="profile image"
          className="w-40 h-40 object-cover rounded-full border-amber-50 relative"
        />

        <button className="absolute ml-[3.6rem] mt-[10rem]  bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 cursor-pointer">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        {/* Channel details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">rvkrm_esports01</h1>
          <p className="text-gray-600 text-base font-semibold">
            @rvkrmesports01
          </p>

          <p className="mt-2 text-zinc-700 w-[30rem] line-clamp-1">
            RV KRM ESPORTS is a professional tournament organization dedicated
            to hosting top-tier Free Fire competitions. We bring together the
            best talent, providing a platform for players to compete at the
            highest level. Join us for elite tournaments, intense gameplay, and
            the ultimate esports experience.
          </p>

          <button className="mt-4 py-2 px-6 bg-red-500 text-white font-semibold rounded-3xl hover:bg-red-400 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* All Tabs */}

      <Tab />
    </div>
  );
};

export default Profile;
