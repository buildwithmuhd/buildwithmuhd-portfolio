import type { Metadata } from "next";
import { BlogListClient } from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing from Muhammad Is'haq on AppSec, frontend engineering, product security, and building high-trust software.",
};

export default function BlogPage() {
  return (
    <main className="text-[#11100e]">
      <section className="px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <BlogListClient />
        </div>
      </section>
    </main>
  );
}
