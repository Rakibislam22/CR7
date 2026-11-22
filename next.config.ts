import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    agentUpgrade: "security",
    agentFeedback: true,
    cpus: 1,
  },
};

export default nextConfig;
