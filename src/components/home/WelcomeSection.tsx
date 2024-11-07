import { fetchAPI } from '@/utils/api';

interface WelcomeSectionData {
  id: number;
  Title: string;
  Paragraphs: string;
}

async function getWelcomeContent() {
  const { data } = await fetchAPI<{ data: WelcomeSectionData }>('/api/welcome-section');
  return data;
}

export default async function WelcomeSection() {
  try {
    const welcomeContent = await getWelcomeContent();
    
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {welcomeContent.Title}
          </h2>
          <div className="h-1 w-24 bg-tuscher-blue mx-auto mb-12"></div>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {welcomeContent.Paragraphs.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Welcome</h2>
          <p className="text-center text-red-600">Failed to load welcome content.</p>
        </div>
      </section>
    );
  }
}
