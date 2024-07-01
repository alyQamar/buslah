import React, { useEffect } from 'react';
import arrow from "../../assets/icons/profile/arrow-back.svg";
import About from "@components/Profile/About";
import BookingBox from "@components/Profile/BookingBox";
import Experience from "@components/Profile/Experience";
import Skills from "@components/Profile/Skills";
import Taps from "@components/Profile/Taps";
import UserInf from "@components/Profile/UserInf";
import YouShouldFollow from "@components/Profile/YouShouldFollow";
import ArrowButton from '@components/Profile/ArrowButton';
import { routes } from '../../routes';
import { Link, useParams } from 'react-router-dom';
import LoggedUser from '@hooks/Auth/logged-user';

const Profile = () => {

  const [currentUserData] = LoggedUser();
  console.log(currentUserData);
  const languages = currentUserData?.data.languages.length > 0 ? currentUserData.data.languages.join(', ') : 'Arabic';
  const interests = currentUserData?.data.interests.length > 0 ? currentUserData.data.interests.join(', ') : 'No interests';

  return (
    <div className="bg-stone-50 flex flex-col items-center gap-[100px]">
      <Link to={routes.home}><ArrowButton /></Link>
      <div>
        <UserInf firstName={currentUserData?.data?.firstName} />
      </div>
      <div className="mt-[100px]">
        <Taps />
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col gap-6">
          <About headline={currentUserData.data.headline} languages={languages} interests={interests} city={currentUserData.data.city} country={currentUserData.data.country} />
          <Experience experiences={currentUserData?.data.experience} />
          <Skills skills={currentUserData?.data.skills} />
        </div>
        <div>
          <BookingBox />
          <YouShouldFollow />
        </div>
      </div>
    </div>
  );
};

export default Profile;
