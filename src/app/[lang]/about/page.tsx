import Breadcrumbs from '@/ui/components/BreadCrumbs';
import AboutPageContainer from '@/ui/containers/AboutPageContainer';
import { HomeSVG } from '@public/vectors';
import { useTranslations } from 'next-intl';

const About = () => {
const t = useTranslations("AboutPage")
  const crumbs = [
    { id: 1, title: <HomeSVG />, href: '/' },
    { id: 2, title: t("title"), href: '/about' },
  ];

  
  return (
    <div className="relative top-[103px]">
            <Breadcrumbs crumbs={crumbs} />
            <AboutPageContainer />
             
    </div>
  )
}

export default About