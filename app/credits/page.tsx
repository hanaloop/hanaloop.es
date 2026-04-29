import { notFound } from 'next/navigation';

export const dynamicParams = false;

export default function Page() {
  notFound();
}

export function generateStaticParams() {
  return [];
}

