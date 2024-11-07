// src/components/home/ProductCategories.tsx

import Image from 'next/image';
import Link from 'next/link';
import { fetchAPI, getStrapiMediaUrl } from '@/utils/api';
import type { ProductCategoryData, ProductCategoriesResponse } from '@/types/content';

async function getProductCategories() {
  return await fetchAPI<ProductCategoriesResponse>('/api/product-category');
}

export default async function ProductCategories() {
  let categories: ProductCategoriesResponse | null = null;

  try {
    categories = await getProductCategories();
  } catch (error) {
    console.error('Error fetching product categories:', error);
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <p className="text-center text-red-600">Failed to load product categories.</p>
        </div>
      </section>
    );
  }

  if (!categories || !categories.data.length) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <p className="text-center">No categories available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-gray-100">
      <div className="container-padding">
        <h2 className="section-title">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.data.map((category) => (
            <article key={category.id} className="card card-hover">
              {category.attributes.image?.data?.attributes?.url && (
                <Image
                  src={getStrapiMediaUrl(category.attributes.image.data.attributes.url)}
                  alt={category.attributes.image.data.attributes.alternativeText || category.attributes.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">{category.attributes.title}</h3>
                <p className="text-gray-600">{category.attributes.description}</p>
                <Link 
                  href={`/products/${category.attributes.slug}`} 
                  className="inline-block text-tuscher-blue hover:text-tuscher-light transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
