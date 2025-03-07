'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, GitCommit, GitBranch, GitPullRequest, GitMerge } from 'lucide-react';

interface GitHubEvent {
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload: any;
}

export function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch('https://api.github.com/users/smustafaamir/events', {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'GitHub-Activity-Feed',
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setEvents(data.slice(0, 5)); // Get latest 5 events
        } else {
          setError('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
        setError(error instanceof Error ? error.message : 'Failed to load GitHub activity');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return <GitCommit className="h-4 w-4" />;
      case 'CreateEvent':
        return <GitBranch className="h-4 w-4" />;
      case 'PullRequestEvent':
        return <GitPullRequest className="h-4 w-4" />;
      case 'WatchEvent':
        return <Github className="h-4 w-4" />;
      default:
        return <GitMerge className="h-4 w-4" />;
    }
  };

  const getEventDescription = (event: GitHubEvent) => {
    switch (event.type) {
      case 'PushEvent':
        return `Pushed ${event.payload.size} commits to ${event.repo.name}`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type} in ${event.repo.name}`;
      case 'PullRequestEvent':
        return `${event.payload.action} pull request in ${event.repo.name}`;
      case 'WatchEvent':
        return `Starred ${event.repo.name}`;
      default:
        return `Activity in ${event.repo.name}`;
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="animate-pulse space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-muted" />
                  <div className="h-4 flex-1 rounded bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {error.includes('rate limit') 
              ? 'GitHub API rate limit exceeded. Please try again later.'
              : error}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/25">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 hover:border-primary/50 hover:shadow-sm hover:shadow-primary/25"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                {getEventIcon(event.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm">{getEventDescription(event)}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(event.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 