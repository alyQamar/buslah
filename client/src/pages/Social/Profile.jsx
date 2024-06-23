import React from 'react';
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
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="bg-stone-50 flex flex-col items-center gap-[100px]">
      <Link to={routes.home}><ArrowButton /></Link>
      <div>
        <UserInf />
      </div>
      <div className="mt-[100px]">
        <Taps />
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col gap-6">
          <About />
          <Experience />
          <Skills />
        </div>
        <div>
          <BookingBox/>
          <YouShouldFollow />
        </div>
      </div>
    </div>
  );
};

export default Profile;
