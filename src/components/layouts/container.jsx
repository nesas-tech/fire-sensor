import clsx from "clsx";

const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(className, "container px-4 sm:px-8 mx-auto lg:w-10/12")}
    >
      {children}
    </div>
  );
};

export default Container;
