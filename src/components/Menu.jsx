import { GrGroup } from "react-icons/gr";
// import { ImBooks } from "react-icons/im";
// import { IoBookSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
// import { RiParentFill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="min-h-screen bg-slate-600  sticky top-0 w-full">
      {/* logo */}
      <div className="flex items-center justify-evenly h-20">
        <img src="" alt="logo" />
        <h1 className="text-2xl font-semibold text-black md:inline-block hidden">
          JS
        </h1>
      </div>
      {/* menu */}
      <div className="flex flex-col text-center w-full">
        <div className="">
          <Link to="/admin" className="btn btn-ghost w-4/5">
            <TiHomeOutline className="text-lg" />
            <span className="lg:inline-block hidden">Home</span>
          </Link>
        </div>
        <div>
          <Link to="/teacher" className="btn btn-ghost w-4/5">
            <LiaChalkboardTeacherSolid className="text-lg " />
            <span className="lg:inline-block hidden">Teachers</span>
          </Link>
        </div>
        <div>
          <Link to="/student" className="btn btn-ghost w-4/5">
            <GrGroup className="text-lg" />
            <span className="lg:inline-block hidden">Students</span>
          </Link>
        </div>
        {/* <div>
          <Link to="" className="btn btn-ghost w-4/5">
            <RiParentFill className="text-lg" />
            <span className="lg:inline-block hidden">Parents</span>
          </Link>
        </div> */}
        <div>
          <Link to="" className="btn btn-ghost w-4/5">
            <SiBookstack className="text-lg" />
            <span className="lg:inline-block hidden">Subjects</span>
          </Link>
        </div>
        {/* <div>
          <Link to="" className="btn btn-ghost w-4/5">
            <ImBooks className="text-lg-" />
            <span className="lg:inline-block hidden">Classes</span>
          </Link>
        </div>
        <div>
          <Link to="" className="btn btn-ghost w-4/5">
            <IoBookSharp className="text-lg" />
            <span className="lg:inline-block hidden">Lessons</span> */}
        {/* </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
