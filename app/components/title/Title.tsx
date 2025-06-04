interface PropsType {
  text: string;
}
export default function Title({ text }: PropsType) {
  return <h1 className=" text-center ">{text}</h1>;
}
