import Breadcrumbs from '@/ui/components/BreadCrumbs';
import PartnersDetailPageContainer from '@/ui/containers/PartnersDetailPageContainer';
import { HomeSVG } from '@public/vectors';
import { useParams } from 'next/navigation';

const ServicesDetailPage = async({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;

  const crumbs = [
    { id: 1, title: <HomeSVG />, href: '/' },
    { id: 2, title: 'Tərəfdaşlar', href: '/partners' },
    { id: 3, title: id, href: '/partners/id' },
  ];
  
  return (
    <div className="relative top-[103px]">
            <Breadcrumbs crumbs={crumbs} />
            <PartnersDetailPageContainer />             
    </div>
  )
}

export default ServicesDetailPage