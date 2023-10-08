import { atom, useSetRecoilState } from "recoil";

interface IContent {
  name: string;
  id: number;
  ImagePath: string;
  comment: string;
}
export const contentsState = atom<IContent[]>({
  key: "contents",
  default: [
    {
      name: "추억을 저장해보세요",
      id: 1232151515,
      ImagePath:
        "https://media.discordapp.net/attachments/1129327737035837500/1142434162389815296/IMG_1216.png?ex=6533c339&is=65214e39&hm=7222e2a76a8b22b0b002c5fe8bf7d3a20e507a3e467a6044a12be0909fb4dfc1&=&width=670&height=670",
      comment:
        "다른 페이지에서 저장 버튼을 눌러 콘텐츠를 보관하고, 회색존에 드래그해서 삭제해요",
    },
  ],
});

export const saveContentsToLocalStorage = (data: IContent[]) => {
  localStorage.setItem("contents", JSON.stringify(data));
};

export const loadContentsFromLocalStorage = (): IContent[] | null => {
  const contents = JSON.parse(localStorage.getItem("contents") || "null");
  return contents;
};

export const setContents = () => {
  const setter = useSetRecoilState(contentsState);
  return setter;
};
