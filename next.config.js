/** @type {import('next').NextConfig} */

import withVideos from "next-videos";
import createNextIntlPlugin from "next-intl/plugin";


const withNextIntl = createNextIntlPlugin();

const baseConfig = {

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    dangerouslyAllowSVG: true,
    domains: ["picsum.photos", "media.istockphoto.com"],
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

export default withNextIntl(withVideos(baseConfig));
