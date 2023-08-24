import Container from "@/components/layouts/container";
import clsx from "clsx";
import Image from "next/image";

const Header = ({ className, title }) => {
  return (
    <header className={clsx(className, "w-full bg-white py-4 lg:py-7")}>
      <Container className="flex items-center text-black justify-between font-semibold">
        <h1>{title}</h1>
        <Image
          src="/static/logo-tech-black.svg"
          alt=""
          width={50}
          height={50}
          className="sm:w-[60px] sm:h-[60px]"
        />
      </Container>
    </header>
  );
};

export default Header;
