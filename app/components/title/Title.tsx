interface PropsType {
  children: React.ReactNode;
  style: string;
}
export default function Title({ children, style }: PropsType) {
  return <h1 className={`${style}`}>{children}</h1>;
}
