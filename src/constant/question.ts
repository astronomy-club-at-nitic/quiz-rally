import Map1Image from '@/asset/map/1.jpg';
import Map2Image from '@/asset/map/2.jpg';
import Map3Image from '@/asset/map/3.jpg';
import QuestionChoice1AImage from '@/asset/question/choice1-a.webp';
import QuestionChoice1BImage from '@/asset/question/choice1-b.webp';
import QuestionChoice1CImage from '@/asset/question/choice1-c.webp';
import QuestionChoice2AImage from '@/asset/question/choice2-a.webp';
import QuestionChoice2BImage from '@/asset/question/choice2-b.webp';
import QuestionChoice2CImage from '@/asset/question/choice2-c.webp';
import QuestionChoice3AImage from '@/asset/question/choice3-a.webp';
import QuestionChoice3BImage from '@/asset/question/choice3-b.webp';
import QuestionChoice3CImage from '@/asset/question/choice3-c.webp';
import QuestionThumbnail1Image from '@/asset/question/thumbnail1.webp';
import QuestionThumbnail2Image from '@/asset/question/thumbnail2.webp';
import QuestionThumbnail3Image from '@/asset/question/thumbnail3.webp';
import type { StaticImageData } from '@/type/static-image-data';

export type Choice = {
  id: string;
  title: string;
  thumbnailSrc: StaticImageData;
  thumbnailAlt: string;
};

export type Answer = {
  title: string;
  content: string;
  hashedChoiceId: string;
};

export type Question = {
  id: string;
  title: string;
  content: string;
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  choices: Choice[];
  answer: Answer;
  mapImageSrc: StaticImageData;
  mapImageAlt: string;
  hashedToken: string;
};

export const questions: Question[] = [
  {
    id: '1',
    title: '実際に小惑星の名前に付けられているのはどれ？',
    content:
      '報告・公表された小惑星の観測数は、1990年代前半は年間10万件台ほどでしたが、近年その数はぐっと増え、年間700万件を超えています。さて、実際に小惑星の名前とされているのは次のうちどれでしょう？',
    thumbnail: QuestionThumbnail1Image,
    thumbnailAlt: '',
    choices: [
      {
        id: '1',
        title: 'かぐや姫',
        thumbnailSrc: QuestionChoice1AImage,
        thumbnailAlt: '',
      },
      {
        id: '2',
        title: '花咲かじいさん',
        thumbnailSrc: QuestionChoice1BImage,
        thumbnailAlt: '',
      },
      {
        id: '3',
        title: '舌切りすずめ',
        thumbnailSrc: QuestionChoice1CImage,
        thumbnailAlt: '',
      },
    ],
    answer: {
      title: 'かぐや姫',
      content: '小惑星かぐや姫は1981年10月30日に東京天文台木曽観測所で香西洋樹と古川騏一郎によって発見されました。',
      hashedChoiceId: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    },
    mapImageSrc: Map1Image,
    mapImageAlt: '2階 208 INGNI の手前を示した地図',
    hashedToken: '85423cedc3515c95da472ce584b22b2bfa0b3aa587f9af9c2c6cdef81d5ac007',
  },
  {
    id: '2',
    title: 'これまでに打ち上げられた人工衛星は全部でいくつ？',
    content:
      '1957年10月4日のソビエト連邦によるスプートニク1号の打ち上げを皮切りに、人類は今までいくつもの人工衛星を打ち上げてきました。さて、実際にこれまで打ち上げられた人工衛星の数は次のうちどれでしょう？',
    thumbnail: QuestionThumbnail2Image,
    thumbnailAlt: '',
    choices: [
      {
        id: '1',
        title: 'およそ1600機',
        thumbnailSrc: QuestionChoice2AImage,
        thumbnailAlt: '',
      },
      {
        id: '2',
        title: 'およそ16000機',
        thumbnailSrc: QuestionChoice2BImage,
        thumbnailAlt: '',
      },
      {
        id: '3',
        title: 'およそ160000機',
        thumbnailSrc: QuestionChoice2CImage,
        thumbnailAlt: '',
      },
    ],
    answer: {
      title: 'およそ16000機',
      content:
        'Union of Concerned Scientists によると、2022年時点では、打ち上げられた人工衛星の数は16000機で、そのうち現在も周回軌道上にいるのが6700機だそうです。',
      hashedChoiceId: 'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
    },
    mapImageSrc: Map2Image,
    mapImageAlt: '2階 ノースコート レオンくんのもりを示した地図',
    hashedToken: 'b504e1e585364cdb8891426b64383c2ac65dd96dfd9fd953686560861305963d',
  },
  {
    id: '3',
    title: '実際に宇宙食として食べられていないのはどれ？',
    content:
      '宇宙食にはさまざまな制約がありますが、研究開発の結果、現在宇宙食の種類は300を超えています。では、実際に宇宙食として食べられていないものは次のうちどれでしょう？',
    thumbnail: QuestionThumbnail3Image,
    thumbnailAlt: '',
    choices: [
      {
        id: '1',
        title: 'うなぎの蒲焼き',
        thumbnailSrc: QuestionChoice3AImage,
        thumbnailAlt: '',
      },
      {
        id: '2',
        title: 'すき焼き',
        thumbnailSrc: QuestionChoice3BImage,
        thumbnailAlt: '',
      },
      {
        id: '3',
        title: 'お好み焼き',
        thumbnailSrc: QuestionChoice3CImage,
        thumbnailAlt: '',
      },
    ],
    answer: {
      title: 'すき焼き',
      content:
        'うなぎの蒲焼 (スペースうなぎ) は飲食企業経営者の宮澤健氏によって、お好み焼きは日清食品によってそれぞれ宇宙食として開発されましたが、すき焼きは未だ宇宙食にはなっていません。',
      hashedChoiceId: 'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35',
    },
    mapImageSrc: Map3Image,
    mapImageAlt: '3階 308 Yogibo Store の手前を示した地図',
    hashedToken: '6f675f36aac3a4fc241e0f8bc7c4df952c831d55e1aca5f69a1436394dcdcde6',
  },
];
