
const {withPlausibleProxy} = require('next-plausible')

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withPlausibleProxy()(nextConfig);