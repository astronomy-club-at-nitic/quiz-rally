import type { ReactNode } from 'react';
import JumbotronBackgroundImage from '@/asset/jumbotron/background.png';
import { Image } from '@/component/common/image';
import { Link } from '@/component/common/link';
import { QuestionCard } from '@/component/questions/question-card';
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
      {questions.map((question) => (
        <Link key={question.id} href={`/${question.id}`}>
          <QuestionCard {...question} status="correct" />
        </Link>
      ))}
      {questions.map((question) => (
        <Link key={question.id} href={`/${question.id}`}>
          <QuestionCard {...question} status="incorrect" />
        </Link>
      ))}
      {questions.map((question) => (
        <Link key={question.id} href={`/${question.id}`}>
          <QuestionCard {...question} status="unanswered" />
        </Link>
      ))}
    </div>
  </div>
);

export default RootPage;
