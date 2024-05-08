// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
    posthog.init("phc_QhlnZCxS3pf7iwRwlPdlfxvJCurFRoVQPsCHy1mZpBW", {
        api_host: "https://eu.i.posthog.com",
        // capture_pageview: false
    });
};

export function PHProvider({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
  }