import Container from "@/app/ui/container";
import Title from "../title/Title";

export default function Footer() {
  return (
    <footer className=" mt-[6rem] py-[1rem] bg-blue-400 ">
      <Container>
        <div className=" flex items-center justify-center lg:justify-between ">
          <Title style=" text-blue-600  font-bold text-white text-[1.8rem] ">Shop Demo</Title>
          <div className="  hidden   text-white md:w-1/3 lg:flex gap-5 justify-between">
            <ul>
              <h2 className="font-bold text-[1.5rem]">About</h2>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">How it works</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Featured</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Partnership</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Business Relation</li>
            </ul>
            <ul>
              <h2 className="font-bold text-[1.5rem]">Community</h2>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Events</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Blog</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Podcast</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Invite a friend</li>
            </ul>
            <ul>
              <h2 className="font-bold text-[1.5rem]">Socials</h2>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Discord</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Instagram</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Twitter</li>
              <li className="p-1 font-semibold hover:text-gray-700 hover:cursor-pointer transition duration-200">Facebook</li>
            </ul>
          </div>
        </div>
        <div className=" pt-[1rem] font-semibold mt-[2rem] text-center text-[#fff] border-t-[1px] ">©2022 MORENT. All rights reserved</div>
      </Container>
    </footer>
  );
}
