import Breadcrumbs from '@/ui/components/BreadCrumbs';
import ServiceDetailPageContainer from '@/ui/containers/ServicesDetailPageContainer';
import { HomeSVG } from '@public/vectors';
import { useParams } from 'next/navigation';

const ServicesDetailPage = async({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;

  const crumbs = [
    { id: 1, title: <HomeSVG/>, href: '/' },
    { id: 2, title: 'Xidmətlər', href: '/services' },
    { id: 3, title: id, href: '/services/id' },
  ];
  
  return (
    <div className="relative top-[103px]">
            <Breadcrumbs crumbs={crumbs} />
            <ServiceDetailPageContainer/>             
    </div>
  )
}

export default ServicesDetailPage