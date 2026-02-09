import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-12"
        >
          Blog
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-card p-6 flex flex-col transition-shadow hover:shadow-lg cursor-pointer"
            >
              <p className="text-xs text-muted-foreground mb-3">
                {post.date} · {post.readTime}
              </p>
              <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read more <ArrowRight className="h-3 w-3" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
