import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const sourceFiles = [
  {
    path: 'public/media/site-zero/gameplay.gif',
    url: 'https://static.wixstatic.com/media/2e665a_991403d178804341bbc43d77d5799444~mv2.gif',
    expectedBytes: 25942477,
  },
  {
    path: 'public/media/tic-tac-toe/cover.gif',
    url: 'https://static.wixstatic.com/media/2e665a_6bd7a3505ee1498f8220b155cfae9378~mv2.gif',
    expectedBytes: 1514273,
  },
];

for (const item of sourceFiles) {
  const response = await fetch(item.url);
  if (!response.ok) {
    throw new Error(`Could not download Wix media ${item.path}: HTTP ${response.status}`);
  }

  const content = Buffer.from(await response.arrayBuffer());
  if (content.length !== item.expectedBytes) {
    throw new Error(`Invalid size for ${item.path}: expected ${item.expectedBytes}, received ${content.length}`);
  }

  await mkdir(dirname(item.path), { recursive: true });
  await writeFile(item.path, content);
  console.log(`Archived ${item.path} (${content.length} bytes)`);
}
