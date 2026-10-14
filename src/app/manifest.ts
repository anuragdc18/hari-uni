import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HARI University",
    short_name: "HARI",
    description: "Heartfulness Academy of Research and Innovation — Deemed-to-be University, Kanha Shanti Vanam, Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f1",
    theme_color: "#11364f",
    icons: [{ src: "/icon.png", sizes: "96x92", type: "image/png" }, { src: "/apple-icon.png", sizes: "180x174", type: "image/png" }],
  };
}
