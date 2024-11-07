import Image from 'next/image';
import Link from 'next/link';
import { fetchAPI, getStrapiMediaUrl } from '@/utils/api';

interface HeroSectionData {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  CallToActionText: string;
  CallToActionLink: string;
  BackgroundImage: Array<{
    id: number;
    url: string;
    alternativeText: string | null;
    formats: {
      [key: string]: {
        url: string;
      };
    };
  }>;
}

async function getHeroContent() {
  try {
    const { data } = await fetchAPI<{ data: HeroSectionData }>('/api/hero-section');
    return data;
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return null;
  }
}

export default async function HeroSection() {
  const heroContent = await getHeroContent();

  if (!heroContent) {
    console.error('Invalid hero content:', heroContent);
    return null;
  }

  const { Title, Description, CallToActionText, CallToActionLink, BackgroundImage } = heroContent;
  const backgroundImageUrl = BackgroundImage?.[0]?.url;

  return (
    <section className="relative h-[50vh] mt-24 overflow-hidden">
      {backgroundImageUrl && (
        <div className="absolute inset-0 w-full">
          <div className="relative w-full h-full">
            <Image
              src={getStrapiMediaUrl(backgroundImageUrl)}
              alt={BackgroundImage[0].alternativeText || Title}
              fill
              className="object-cover brightness-50"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      )}
      
      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 py-12">
          {/* Left Side */}
          <div className="w-full md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {Title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              {Description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={CallToActionLink}
                className="inline-flex items-center justify-center px-8 py-3 bg-white 
                         text-tuscher-blue hover:bg-gray-100 rounded-full transition-colors"
              >
                {CallToActionText}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 
                         border-2 border-white text-white hover:bg-white 
                         hover:text-tuscher-blue rounded-full transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="w-full md:w-1/2 p-4 z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-8 text-white">Warum Tüscher Systeme?</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center 
                                 rounded-full bg-yellow-400/20">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span className="text-lg text-white">Innovative Lösungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
