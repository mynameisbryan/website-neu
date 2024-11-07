const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!API_URL) {
  throw new Error('API_URL is not defined. Please set NEXT_PUBLIC_STRAPI_API_URL in your environment variables.');
}

if (!API_TOKEN) {
  throw new Error('API_TOKEN is not defined. Please set STRAPI_API_TOKEN in your environment variables.');
}

export async function fetchAPI<T>(endpoint: string, params = {}): Promise<T> {
  const queryString = new URLSearchParams(params).toString();
  const url = `${API_URL}${endpoint}${queryString ? `?${queryString}` : ''}${queryString ? '&' : '?'}populate=*`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`API error (${response.status}): ${await response.text()}`);
    }

    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}

export function getStrapiMediaUrl(url: string | null): string {
  if (!url) return '';

  if (url.startsWith('http')) {
    return url;
  }

  return `${API_URL}${url}`;
}

export async function getProductCategories() {
  return await fetchAPI('/api/product-categories');
}

