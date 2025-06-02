import { Link } from '@/i18n/navigation';
import { getLocale } from 'next-intl/server';

type Crumb = {
  id: string | number;
  title: React.ReactNode;
  href: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

const Breadcrumbs = async({ crumbs }: BreadcrumbsProps) => {
  if (!crumbs || crumbs.length === 0) return null;
const locale = await getLocale();

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-14px600 px-0 md:px-16 py-2 border font-inter">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={crumb.id} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                   locale={locale}
                    href={crumb.href as typeof Link.prototype.href}
                    className="text-gray-500 hover:text-brand-700 text-sm hover:bg-brand-50 p-1 md:p-2 rounded-[6px] "
                  >
                    {crumb.title}
                  </Link>
                  <span className="mx-2 text-gray-400">/</span>
                </>
              ) : (
                <span className="bg-brand-50 text-brand-700 p-2 rounded-[6px]">
                  {crumb.title}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
