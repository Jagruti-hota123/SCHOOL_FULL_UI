import { FaPlus, FaRegEye, FaSearch } from "react-icons/fa";
import { teachersData } from "../../libs/teachersList";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoOptionsOutline } from "react-icons/io5";
import { FaArrowDownShortWide } from "react-icons/fa6";
const TeachersList = () => {
  return (
    <div className="overflow-x-auto">
      {/* HEADERS */}
      <div className="flex justify-between p-4">
        {/* TITLE */}
        <h1 className="text-2xl text-black font-semibold">All Teachers</h1>
        <div className="flex gap-3 justify-center items-center">
          {/* Search Input */}
          <div className="ring-1 ring-slate-300 w-56 h-8 rounded-xl  flex justify-center items-center gap-3 ">
            <FaSearch className="text-xl text-slate-200" />
            <input
              type="search"
              className="focus:ring-0 focus:outline-none bg-slate-100 "
              placeholder="Search..."
            />
          </div>
          {/* Header Action Input */}
          <div className="flex gap-4">
            <div className="bg-yellow-300  p-2 rounded-lg flex items-center justify-center opacity-80">
              <IoOptionsOutline className="text-2xl" />
            </div>
            <div className="bg-yellow-300  p-2 rounded-lg flex items-center justify-center opacity-80">
              <FaArrowDownShortWide />
            </div>
            <div className="bg-yellow-300  p-2 rounded-lg flex items-center justify-center opacity-80">
              <FaPlus
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="text-2xl cursor-pointer"
              />

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  {/* body */}
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black font-semibold">
            <th>Info</th>
            <th>TeacherId</th>
            <th>Subjects</th>
            <th>Classes</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {teachersData.map((teacher) => {
            return (
              <tr key={teacher.id}>
                <td>
                  <div className="flex items-center gap-3 text-black">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={teacher?.photo} alt="Profile pic" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{teacher?.name}</div>
                      <div className="text-sm opacity-50">{teacher?.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className=""> {teacher?.teacherId}</span>
                </td>
                <td>
                  <span className="">{teacher?.subjects.toString()}</span>
                </td>
                <td>
                  <span className="">{teacher?.classes.toString()}</span>
                </td>
                <td>
                  <span className="">{teacher?.phone}</span>
                </td>
                <td>
                  <span className="">{teacher?.address}</span>
                </td>
                <th>
                  <button className="flex gap-2 items-center justify-center">
                    <div className="bg-slate-400 h-10 w-10 flex justify-center items-center rounded-full opacity-70  cursor-pointer ">
                      <FaRegEye className="text-2xl text-blue-400" />
                    </div>
                    <div className="bg-red-200 h-10 w-10 flex justify-center items-center rounded-full opacity-70  cursor-pointer ">
                      <RiDeleteBin5Line className="text-2xl text-red-400" />
                    </div>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TeachersList;
