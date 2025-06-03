import { ChildrenType } from "../types/Types";

export default function Container({ children }: ChildrenType) {
  return <div className="contaner ">{children}</div>;
}
