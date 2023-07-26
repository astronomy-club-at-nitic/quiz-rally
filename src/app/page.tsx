import type { ReactNode } from 'react';
import JumbotronBackgroundImage from '@/asset/jumbotron/background.png';
import { Image } from '@/component/common/image';
// import { QuestionCardLink } from '@/component/questions/question-card-link';
import { questions } from '@/constant/question';
import { BrandIcon } from '@/icon/brand-icon';
import { breakpoints } from '@/style/token';

const RootPage = (): ReactNode => (
  <div>
    <div className="relative h-[400px] w-full overflow-y-hidden">
      <Image
        src={JumbotronBackgroundImage}
        sizes={`${breakpoints.desktop.mediaQuery} 1280px, 100vw`}
        alt=""
        priority
        fill
        className="pointer-events-none -z-10 bg-blue-6 object-cover"
      />
      <BrandIcon className="absolute left-1/2 top-1/2 h-[120%] max-w-[84%] -translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="grid grid-cols-[repeat(auto-fit,288px)] justify-center gap-6 py-12 tablet:grid-cols-[repeat(auto-fit,384px)]">
      {questions.map(
        (/* question */) =>
          // <QuestionCardLink key={question.id} question={question} />
          null,
      )}
    </div>
  </div>
);

export default RootPage;
