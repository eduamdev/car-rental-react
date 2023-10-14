import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export function CallToAction() {
  return (
    <section className="border-t bg-neutral-50 py-16">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold leading-9">
            <p>Your Journey Begins Here.</p>
            <p>Dive into Endless Possibilities!</p>
          </h2>
          <div>
            <Button
              size="lg"
              className="flex items-center justify-center text-base"
              asChild
            >
              <Link href="/cars">
                Explore Cars{' '}
                <Icons.arrowLongRight className="ml-2 h-[18px] w-[18px]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
