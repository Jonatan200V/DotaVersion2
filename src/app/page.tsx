import Carruzel from '@/components/Carruzel/Carruzel';
import Dpc from '@/components/Dpc/Dpc';
import Elegir from '@/components/Elegir/Elegir';
import EndSection from '@/components/EndSection/EndSection';
import Footer from '@/components/Footer/Footer';
import Noticias from '@/components/Noticias/Noticias';
import Presentation from '@/components/Presentation/Presentation';
import Unete from '@/components/Unete/Unete';
import { ViewsApi } from '@/types/types';
import { API } from '@/utils/services';

async function fetchToViews(): Promise<ViewsApi[]> {
  try {
    const res = await fetch(`${API}/api/noticias`);
    const data = (await res.json()) as ViewsApi[];
    return data.slice(0, 3);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
export default async function Home() {
  const views: ViewsApi[] = await fetchToViews();
  return (
    <main className='main'>
      <Presentation />
      <Noticias views={views} />
      <Unete />
      <Elegir />
      <Carruzel />
      <Dpc />
      <EndSection />
      <Footer />
    </main>
  );
}
