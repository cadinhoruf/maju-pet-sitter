"use client";

import { GoogleAnalytics } from '@next/third-parties/google';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalyticsComponent({ measurementId }: GoogleAnalyticsProps) {
  return <GoogleAnalytics gaId={measurementId} />;
}
