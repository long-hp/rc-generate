import slug from 'slug';

export default function slugify(source: string) {
  return `${slug(source)}-${Math.random().toString(36).substring(9)}`;
}
