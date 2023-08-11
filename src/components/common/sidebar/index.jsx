import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="flex fixed w-[120px] flex-col items-center justify-center h-screen text-center bg-secondary">
      <div>
        <Link
          className="text-xs w-[120px] space-y-2 flex flex-col items-center font-semibold hover:bg-[#353C45] py-5 text-white"
          href="/"
        >
          <Image src="/static/icons/home.svg" alt="" height={36} width={36} />
          <p>Dashboard</p>
        </Link>
      </div>
      <div>
        <Link
          className="text-xs w-[120px]  space-y-2 flex flex-col items-center font-semibold hover:bg-[#353C45] py-5 text-white"
          href="/"
        >
          <Image
            src="/static/icons/history.svg"
            alt=""
            height={36}
            width={36}
          />
          <p>History</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
