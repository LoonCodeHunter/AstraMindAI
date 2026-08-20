export type WebSearchRequest = {
  query: string;
  maxResults?: number;
};

export type WebSearchResult = {
  title: string;
  url: string;
  snippet: string;
};

export class WebSearchSkill {
  name = 'web-search';

  async search(request: WebSearchRequest): Promise<WebSearchResult[]> {
    // Placeholder: in production, call a real web search API.
    return [
      {
        title: `Result for "${request.query}"`,
        url: 'https://example.com',
        snippet: 'This is a simulated search result.',
      },
    ];
  }
}
