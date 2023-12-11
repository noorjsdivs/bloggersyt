import type { Metadata } from "next";
import type { Viewport } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import { viewport as studioViewport } from "next-sanity/studio/viewport";
import Studio from "./Studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Loading Studio...",
};

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: "resizes-content",
};

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
