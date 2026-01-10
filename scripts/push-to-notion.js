const { Client } = require('@notionhq/client');
const { markdownToBlocks } = require('@tryfabric/martian');
const fs = require('fs');

async function main() {
  const notionToken = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  const filePath = process.argv[2];
  const articleDate = process.argv[3];

  if (!notionToken || !databaseId || !filePath || !articleDate) {
    console.error('Missing required environment variables or arguments');
    console.error('Usage: NOTION_TOKEN=xxx NOTION_DATABASE_ID=xxx node push-to-notion.js <file-path> <date>');
    process.exit(1);
  }

  const notion = new Client({ auth: notionToken });

  // Read markdown file
  const markdown = fs.readFileSync(filePath, 'utf-8');

  // Extract summary from markdown (first paragraph after ## 概要)
  const summaryMatch = markdown.match(/## 概要\n\n([\s\S]*?)(?=\n##|\n---)/);
  const summary = summaryMatch ? summaryMatch[1].trim().slice(0, 2000) : '';

  // Convert markdown to Notion blocks
  const blocks = markdownToBlocks(markdown);

  // Create new page in database
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      'タイトル': {
        title: [
          {
            text: {
              content: `${articleDate}--Claude-Code-news`,
            },
          },
        ],
      },
      '日付': {
        date: {
          start: articleDate,
        },
      },
      'タグ': {
        multi_select: [
          { name: 'claude-code' },
          { name: 'weekly' },
        ],
      },
      '要約': {
        rich_text: [
          {
            text: {
              content: summary,
            },
          },
        ],
      },
    },
    children: blocks.slice(0, 100), // Notion API limit: 100 blocks per request
  });

  console.log('Created Notion page:', response.url);

  // If there are more than 100 blocks, append them in batches
  if (blocks.length > 100) {
    for (let i = 100; i < blocks.length; i += 100) {
      const batch = blocks.slice(i, i + 100);
      await notion.blocks.children.append({
        block_id: response.id,
        children: batch,
      });
      console.log(`Appended blocks ${i} to ${Math.min(i + 100, blocks.length)}`);
    }
  }
}

main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
