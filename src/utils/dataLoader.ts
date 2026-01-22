import { promises as fs } from 'fs';
import path from 'path';

// Define types for our data
export interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
}

export interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    labName: string;
    institution: string;
  };
  intro: {
    heading: string;
    content: string;
  };
  news: NewsItem[];
}

/**
 * Simulates fetching data from a CMS by reading a local JSON file.
 * In production with Keystatic, this would use the Keystatic reader API.
 */
export async function getHomeData(): Promise<HomeData> {
  // In a real Next.js app, we access files from process.cwd()
  // Cast process to any to handle potential missing type definitions for cwd in some environments
  const filePath = path.join((process as any).cwd(), 'src', 'data', 'homeData.json');
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading home data:", error);
    // Fallback data in case file read fails during dev/build
    return {
      hero: { title: "Error Loading Data", subtitle: "", labName: "", institution: "" },
      intro: { heading: "", content: "" },
      news: []
    };
  }
}