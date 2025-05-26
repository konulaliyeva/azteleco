import Breadcrumbs from '@/ui/components/BreadCrumbs';
import NewsDetailPageContainer from '@/ui/containers/NewsDetailPageContainer';
import {HomeSVG } from '@public/vectors';

const NewsDetailPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const crumbs = [
    { id: 1, title: <HomeSVG />, href: '/' },
    { id: 2, title: 'Xəbərlər', href: '/news' },
    { id: 3, title: id, href: '/news/id' },
  ];
  return (
    <div className="relative top-[103px]">
            <Breadcrumbs crumbs={crumbs} />
            <NewsDetailPageContainer />            
    </div>
  )
}

export default NewsDetailPage