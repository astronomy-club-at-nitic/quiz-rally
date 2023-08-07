import ChoiceThumbnail1Image from '@/asset/choice/thumbnail1.png';
import Map1Image from '@/asset/map/1.png';
import Map2Image from '@/asset/map/2.png';
import Map3Image from '@/asset/map/3.png';
import QuestionThumbnail1Image from '@/asset/question/thumbnail1.jpg';
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
  thumbnailSrc: StaticImageData;
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
    title: 'ポテチを富士山に持っていくとどうなる？',
    content:
      'あなたは今、まだ開けていないポテトチップスの袋を持っています。さて、それを持ったまま富士山の麓から山頂まで登山した時、袋はどうなっているでしょうか？',
    thumbnailSrc: QuestionThumbnail1Image,
    thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    choices: [
      {
        id: '1',
        title: 'ポテチが富士山になる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '2',
        title: 'お前はポテチになる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '3',
        title: '[編集済み]',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
    ],
    answer: {
      title: 'ポテチが富士山になる',
      content:
        '高い標高に曝されたポテトチップスの袋は、南方 - ハルトマン時空方程式により、ポテトチップスの含有塩分量に比例した時間を経て富士山に変化します。なお、すべての財団職員は自分がポテトチップスではないことに留意してください。',
      hashedChoiceId: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    },
    mapImageSrc: Map1Image,
    mapImageAlt: '2階 208 INGNI を示した地図',
    hashedToken: '6d8d5db26b326e3da38bb3f4016629b2eb14ba713bd89698513d7099e60734f6',
  },
  {
    id: '2',
    title: 'ポテチを富士山に持っていくとどうなる？',
    content:
      'あなたは今、まだ開けていないポテトチップスの袋を持っています。さて、それを持ったまま富士山の麓から山頂まで登山した時、袋はどうなっているでしょうか？',
    thumbnailSrc: QuestionThumbnail1Image,
    thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    choices: [
      {
        id: '1',
        title: 'ポテチが富士山になる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '2',
        title: 'お前はポテチになる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '3',
        title: '[編集済み]',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
    ],
    answer: {
      title: 'ポテチが富士山になる',
      content:
        '高い標高に曝されたポテトチップスの袋は、南方 - ハルトマン時空方程式により、ポテトチップスの含有塩分量に比例した時間を経て富士山に変化します。なお、すべての財団職員は自分がポテトチップスではないことに留意してください。',
      hashedChoiceId: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    },
    mapImageSrc: Map2Image,
    mapImageAlt: '2階 ノースコート レオンくんのもりを示した地図',
    hashedToken: '6d8d5db26b326e3da38bb3f4016629b2eb14ba713bd89698513d7099e60734f6',
  },
  {
    id: '3',
    title: 'ポテチを富士山に持っていくとどうなる？',
    content:
      'あなたは今、まだ開けていないポテトチップスの袋を持っています。さて、それを持ったまま富士山の麓から山頂まで登山した時、袋はどうなっているでしょうか？',
    thumbnailSrc: QuestionThumbnail1Image,
    thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    choices: [
      {
        id: '1',
        title: 'ポテチが富士山になる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '2',
        title: 'お前はポテチになる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '3',
        title: '[編集済み]',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
    ],
    answer: {
      title: 'ポテチが富士山になる',
      content:
        '高い標高に曝されたポテトチップスの袋は、南方 - ハルトマン時空方程式により、ポテトチップスの含有塩分量に比例した時間を経て富士山に変化します。なお、すべての財団職員は自分がポテトチップスではないことに留意してください。',
      hashedChoiceId: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
    },
    mapImageSrc: Map3Image,
    mapImageAlt: '3階 308 Yogibo Store を示した地図',
    hashedToken: '6d8d5db26b326e3da38bb3f4016629b2eb14ba713bd89698513d7099e60734f6',
  },
];
