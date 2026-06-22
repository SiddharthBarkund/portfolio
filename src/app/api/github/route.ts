/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

// GitHub GraphQL Query
const GITHUB_GRAPHQL_QUERY = `
  query($username: String!) {
    user(login: $username) {
      name
      login
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, orderBy: {field: STARGAZERS, direction: DESC}) {
        totalCount
        nodes {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
          updatedAt
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

// Helper to generate mock contribution days for fallback calendar
function generateMockContributionDays() {
  const days = [];
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setDate(today.getDate() - 365);

  const currentDate = new Date(oneYearAgo);
  while (currentDate <= today) {
    const dateStr = currentDate.toISOString().split("T")[0];
    // Seed some contributions to make the heatmap look realistically populated
    const dayOfWeek = currentDate.getDay();
    let count = 0;
    
    // Give mid-week days higher chance of contributions
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const rand = Math.random();
      if (rand > 0.4) {
        count = Math.floor(Math.random() * 4) + 1; // 1 to 4 contributions
      }
    } else {
      // Weekends have lower chance
      if (Math.random() > 0.8) {
        count = Math.floor(Math.random() * 2) + 1;
      }
    }
    
    days.push({
      date: dateStr,
      contributionCount: count,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return days;
}

// Fallback Mock Data
const MOCK_GITHUB_DATA = {
  username: "SiddharthBarkund",
  name: "Siddharth Barkund",
  avatarUrl: "https://github.com/SiddharthBarkund.png",
  followers: 18,
  following: 22,
  metrics: {
    totalRepos: 6,
    totalStars: 4,
    totalCommits: 148,
    totalPRs: 12,
    totalIssues: 3,
    totalContributions: 165,
    currentStreak: 3,
    longestStreak: 12,
  },
  languages: [
    { name: "Python", percentage: 82.5, color: "#3572A5" },
    { name: "JavaScript", percentage: 10.0, color: "#f1e05a" },
    { name: "HTML", percentage: 5.0, color: "#e34c26" },
    { name: "CSS", percentage: 2.5, color: "#563d7c" },
  ],
  showcaseRepos: [
    {
      name: "PipeWise-AI",
      description: "AI-powered data analysis assistant that enables users to query CSV datasets using natural language.",
      url: "https://github.com/SiddharthBarkund/PipeWise-AI",
      stars: 1,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      updatedAt: "2026-06-19T10:00:00Z",
    },
    {
      name: "Gov_schema",
      description: "Multilingual AI chatbot helping users discover and understand government schemes in English, Hindi, and Marathi.",
      url: "https://github.com/SiddharthBarkund/Gov_schema",
      stars: 1,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      updatedAt: "2026-06-18T10:00:00Z",
    },
    {
      name: "HabiFlow",
      description: "Professional habit tracking and productivity platform with comprehensive analytics and progress visualization.",
      url: "https://github.com/SiddharthBarkund",
      stars: 1,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      updatedAt: "2026-06-15T12:00:00Z",
    },
    {
      name: "Website-Testing-AI-Agent",
      description: "Autonomous AI agent that performs comprehensive website testing and UI/UX analysis.",
      url: "https://github.com/SiddharthBarkund",
      stars: 1,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      updatedAt: "2026-06-10T14:30:00Z",
    },
    {
      name: "LawGuideAI",
      description: "AI-powered legal assistance platform helping users understand laws and navigate legal processes.",
      url: "https://github.com/SiddharthBarkund/-LawGuideAI",
      stars: 0,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      updatedAt: "2026-06-05T09:00:00Z",
    },
    {
      name: "AIML-project-",
      description: "Comprehensive collection of ML and Data Science projects covering core algorithms and techniques.",
      url: "https://github.com/SiddharthBarkund/AIML-project-",
      stars: 0,
      forks: 0,
      language: "Python",
      languageColor: "#3572A5",
      updatedAt: "2026-05-28T16:00:00Z",
    },
  ],
  contributionDays: [], // Seeded on response
};

export async function GET() {
  const token = process.env.GITHUB_PAT || process.env.GITHUB_TOKEN;
  const username = "SiddharthBarkund";

  if (!token) {
    // If no token is configured, return the high-fidelity mock data
    const resData = { ...MOCK_GITHUB_DATA };
    resData.contributionDays = generateMockContributionDays() as any;
    return NextResponse.json(resData);
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_GRAPHQL_QUERY,
        variables: { username },
      }),
      next: { revalidate: 86400 }, // Cache response for 24 hours
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL request failed with status: ${response.status}`);
    }

    const json = await response.json();
    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error("GraphQL validation errors in query");
    }

    const user = json.data?.user;
    if (!user) {
      throw new Error("User details not found in response");
    }

    // Process Repositories list
    const repos = user.repositories.nodes || [];
    let totalStars = 0;
    const showcaseRepos: any[] = [];

    // Process Languages Map
    const languageBytes: Record<string, { size: number; color: string }> = {};

    repos.forEach((repo: any) => {
      totalStars += repo.stargazerCount;
      
      // Calculate language bytes size
      const langEdges = repo.languages?.edges || [];
      langEdges.forEach((edge: any) => {
        const name = edge.node.name;
        const color = edge.node.color || "#CCCCCC";
        const size = edge.size;

        if (languageBytes[name]) {
          languageBytes[name].size += size;
        } else {
          languageBytes[name] = { size, color };
        }
      });

      // Showcase items (keep top items)
      showcaseRepos.push({
        name: repo.name,
        description: repo.description,
        url: repo.url,
        stars: repo.stargazerCount,
        forks: repo.forkCount,
        language: repo.primaryLanguage?.name || null,
        languageColor: repo.primaryLanguage?.color || null,
        updatedAt: repo.updatedAt,
      });
    });

    // Sort showcase repos by stars, then forks, then name
    showcaseRepos.sort((a, b) => b.stars - a.stars || b.forks - a.forks);

    // Compute Language Percentages
    let totalLanguageBytes = 0;
    Object.values(languageBytes).forEach((lang) => {
      totalLanguageBytes += lang.size;
    });

    const languages = Object.entries(languageBytes)
      .map(([name, detail]) => {
        const percentage = totalLanguageBytes > 0 
          ? parseFloat(((detail.size / totalLanguageBytes) * 100).toFixed(1))
          : 0;
        return {
          name,
          percentage,
          color: detail.color,
        };
      })
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 8); // Limit to top 8 languages

    // Process Contribution Calendar & Streaks
    const calendar = user.contributionsCollection.contributionCalendar;
    const weeks = calendar.weeks || [];
    const contributionDays = weeks.flatMap((week: any) => week.contributionDays || []);

    // Calculate Streaks
    // Flatten and sort by date chronologically
    contributionDays.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    for (let i = 0; i < contributionDays.length; i++) {
      const count = contributionDays[i].contributionCount;
      if (count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else {
        tempStreak = 0;
      }
    }

    // Trace active current streak from present going backwards
    let activeStreak = 0;
    const todayStr = new Date().toISOString().split("T")[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    let lastContributionIndex = -1;

    for (let i = contributionDays.length - 1; i >= 0; i--) {
      const dayDateStr = contributionDays[i].date;
      const count = contributionDays[i].contributionCount;

      if (count > 0) {
        if (dayDateStr === todayStr || dayDateStr === yesterdayStr || i === contributionDays.length - 1) {
          lastContributionIndex = i;
          break;
        }
      }
    }

    if (lastContributionIndex !== -1) {
      let temp = 0;
      for (let i = lastContributionIndex; i >= 0; i--) {
        if (contributionDays[i].contributionCount > 0) {
          temp++;
        } else {
          break;
        }
      }
      activeStreak = temp;
    }

    currentStreak = activeStreak;

    // Build final output
    const dataOut = {
      username: user.login,
      name: user.name || user.login,
      avatarUrl: user.avatarUrl,
      followers: user.followers.totalCount,
      following: user.following.totalCount,
      metrics: {
        totalRepos: user.repositories.totalCount,
        totalStars,
        totalCommits: user.contributionsCollection.totalCommitContributions,
        totalPRs: user.contributionsCollection.totalPullRequestContributions,
        totalIssues: user.contributionsCollection.totalIssueContributions,
        totalContributions: calendar.totalContributions,
        currentStreak,
        longestStreak,
      },
      languages,
      showcaseRepos: showcaseRepos.slice(0, 6), // Limit showcase to top 6
      contributionDays,
    };

    return NextResponse.json(dataOut);
  } catch (error: any) {
    console.error("Error in github route handler:", error);
    // Serve high-fidelity mock data on server/API errors
    const resData = { ...MOCK_GITHUB_DATA };
    resData.contributionDays = generateMockContributionDays() as any;
    return NextResponse.json(resData);
  }
}
