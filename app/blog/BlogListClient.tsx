"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { posts } from "../../data/posts";
import { Sticker } from "../../components/scrapbook";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../../components/AnimatedSection";

export function BlogListClient() {
  return (
    <>
      <AnimatedSection direction="none" delay={0}>
        <p className="font-hand text-lg">field notes</p>
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1} distance={30}>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">
          BLOG
        </h1>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.2}>
        <p className="mt-5 max-w-2xl text-lg text-black/70">
          Notes on AppSec, frontend engineering, product judgment, and the small
          decisions that make software easier to trust.
        </p>
      </AnimatedSection>

      <StaggerContainer className="mt-10 grid gap-6" staggerDelay={0.15}>
        {posts.map((post) => (
          <StaggerItem key={post.slug} direction="up" distance={35}>
            <article className="group border border-black/15 bg-white/70 p-6 shadow-[5px_5px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[7px_7px_0_rgba(40,100,223,0.22)] hover:border-black/25">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
                    {post.date}
                  </p>
                  <span className="size-1 rounded-full bg-black/30" />
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black/55">
                    <Clock size={11} />
                    {post.readTime} min read
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Sticker
                      key={tag}
                      tone={
                        (["yellow", "mint", "pink", "blue"] as const)[index % 4]
                      }
                    >
                      {tag}
                    </Sticker>
                  ))}
                </div>
              </div>

              <div className="mt-5 md:grid md:grid-cols-[1fr_240px] md:gap-6 md:items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.02em] transition-colors duration-200 group-hover:text-[#2864df]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-black/70">{post.excerpt}</p>
                </div>
                {post.image && (
                  <div className="relative mt-4 overflow-hidden border border-black/10 bg-white p-1.5 shadow-sm md:mt-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
              <Link
                className="focus-ring mt-6 inline-flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-200 hover:border-[#2864df] hover:text-[#2864df]"
                href={`/blog/${post.slug}`}
              >
                Read article <ArrowUpRight size={14} />
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </>
  );
}
