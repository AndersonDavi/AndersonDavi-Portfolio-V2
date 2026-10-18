import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));
const cache = new Map<string, { width: number; height: number }>();

/** Intrinsic size of a file in /public, read at build time so <img> can reserve its space. */
export async function imageSize(publicPath: string): Promise<{ width?: number; height?: number }> {
  if (cache.has(publicPath)) return cache.get(publicPath)!;
  try {
    const { width = 0, height = 0 } = await sharp(publicDir + publicPath.replace(/^\//, '')).metadata();
    const size = { width, height };
    cache.set(publicPath, size);
    return size;
  } catch {
    return {};
  }
}
