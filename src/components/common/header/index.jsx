import clsx from "clsx";

const Header = ({ className }) => {
  return (
    <header
      className={clsx(
        className,
        "w-full text-center text-black text-3xl font-semibold bg-white py-7"
      )}
    >
      <h1>Fire Sensor</h1>
    </header>
  );
};

export default Header;
