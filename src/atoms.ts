import {
  atom,
  selector,
  useRecoilValue,
  useSetRecoilState,
  selectorFamily,
} from "recoil";

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
      id: Date.now() - 100000,
      ImagePath:
        "https://media.discordapp.net/attachments/1129327737035837500/1142434162389815296/IMG_1216.png?ex=6533c339&is=65214e39&hm=7222e2a76a8b22b0b002c5fe8bf7d3a20e507a3e467a6044a12be0909fb4dfc1&=&width=670&height=670",
      comment:
        "다른 페이지에서 저장 버튼을 눌러 콘텐츠를 보관하고, 회색존에 드래그해서 삭제해요 텍스트는 변경즉시 자동 저장됩니다.",
    },
    {
      name: "테두리를 눌러서 드래그, 사진을 눌러서 확대",
      id: Date.now() - 40000,
      ImagePath:
        "https://media.discordapp.net/attachments/1129327737035837500/1142434366979584000/IMG_1358.png?ex=6533c36a&is=65214e6a&hm=6202f4f3e6d638cd6fc4970f003743420149f2749411e139fcabadf047d3c24b&=&width=670&height=670",
      comment: "제곧내",
    },
    {
      name: "오늘도 버그를 발견했다",
      id: Date.now() - 20000,
      ImagePath:
        "https://media.discordapp.net/attachments/1129327737035837500/1142434550048366612/KakaoTalk_20230718_202443979_03.png?ex=6533c396&is=65214e96&hm=b81e77fde054ae0abf9a6adb9f9b10b28902711929e1eaa783a56d3bca908757&=&width=670&height=670",
      comment:
        "돈복사 버그입니다. 지금바로 233002로 시작하는 계좌로 송금하면 200배가 복사됩니다.",
    },
  ],
});

export const setContents = () => {
  const setter = useSetRecoilState(contentsState);
  return setter;
};
export interface ExtendedIContent extends IContent {
  savedDate: string;
}

export const TextAreaSelector = selectorFamily<string, { index: number }>({
  key: "textarea",
  get:
    ({ index }) =>
    ({ get }) => {
      const data = get(contentsState);
      const text = data[index].comment;
      return text;
    },
  set:
    ({ index }) =>
    ({ set }, newText) => {
      set(contentsState, (data) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData[index].comment = newText;
        saveContentsToLocalStorage(newData);
        return newData;
      });
    },
});

export const contentSelector = selector<ExtendedIContent[]>({
  key: "time",
  get: ({ get }) => {
    const datas = get(contentsState);
    const datasWithSavedData = datas.map((item) => {
      const date = new Date(item.id);
      const year = date.getFullYear().toString().slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hours = ("0" + date.getHours()).slice(-2);
      return { ...item, savedDate: `${year}-${month}-${day}-${hours}` };
    });
    return datasWithSavedData;
  },
});

export const getContents = () => {
  return useRecoilValue(contentSelector);
};

export const saveContentsToLocalStorage = (data: IContent[]) => {
  localStorage.setItem("contents", JSON.stringify(data));
};

export const loadContentsFromLocalStorage = (): IContent[] | null => {
  const contents = JSON.parse(localStorage.getItem("contents") || "null");
  return contents;
};
