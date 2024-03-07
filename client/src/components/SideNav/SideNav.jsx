import { sideNavItems } from '@utils/data';
import MenuItem from '@components/SideNavItem/SideNavItem';
import PostButton from '@components/PostButton/PostButton';
import Footer from '@components/Footer/Footer';

const SideNav = () => {
  return (
    <div className="w-[284px] h-[1780px] bg-stone-50 rounded-2xl flex flex-col items-center pt-[30px]">
      <div className="flex flex-col gap-[7px] mb-[10px]">
        {sideNavItems.map((navItem, index) => (
          <div key={index} className="rounded-md">
            <MenuItem name={navItem.name} icon={navItem.icon} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <PostButton />
        <Footer />
      </div>
    </div>
  );
};

export default SideNav;

// import HomeFocous from '../../assets/publicIcons/HomeFocous.png';
// import msg from '../../assets/publicIcons/Vector (1).png';
// import calender from '../../assets/publicIcons/Vector.png';
// import heart from '../../assets/publicIcons/Heartempty.png';
// import arrow from '../../assets/publicIcons/arrow.png';
// import live from '../../assets/publicIcons/live.png';

// import MenuAvatar from '../Common/MenuAvatar';
// import MenuItem from '../Common/MenuItem';
// import MenuButton from '../Common/MenuButton';
// import Footer from '../Common/Footer';
// const SideNav = () => {
//   return (
//     <div className="w-[284px] h-[1780px] bg-stone-50 rounded-2xl flex flex-col items-center pt-[30px]">
//       <div className="mb-2">
//         <MenuAvatar />
//       </div>
//       <div className="flex flex-col gap-[7px] mb-[10px]">
//         <div className="bg-cyan-800 rounded-md">
//           <MenuItem name="Home" icon={HomeFocous} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Mentor" icon={msg} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Messages" icon={msg} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Sessions" icon={calender} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Saved" icon={calender} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Market" icon={calender} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Calender" icon={calender} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="E-Learning" icon={heart} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Become a Mentor" icon={arrow} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="Live Sessions" icon={live} />
//         </div>
//         <div className="rounded-md">
//           <MenuItem name="More" icon={live} />
//         </div>
//       </div>
//       <div className="flex flex-col items-center gap-[8px]">
//         <MenuButton />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default SideNav;
