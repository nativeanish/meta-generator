interface MetaGeneratorOptions {
  /** Page title */
  title?: string;
  /** Page description */
  desc?: string;
  /** Page URL */
  url?: string;
  /** Author name */
  name?: string;
  /** Image URL */
  img?: string;
  /** Image alt text */
  img_alt?: string;
  /** Character encoding (defaults to utf-8) */
  charset?: string;
  /** Generator name */
  generator?: string;
  /** Enable HTML comments */
  comments?: boolean;
  /** Site name for og:site_name */
  site_name?: string;
  /** Robots meta tag content */
  robots?: string;
  /** Custom crawler directives */
  crawlers?: Record<string, string>;
  /** Preconnect URLs */
  preconnect?: string | Array<string | { url: string; crossorigin?: boolean }>;
  /** DNS prefetch URLs */
  dns_prefetch?: string | Array<string>;
  /** CSS files to include */
  css?: string | string[];
  /** Inline CSS content */
  inline_css?: string | string[] | Array<{ css: string; [key: string]: string }>;
  /** JavaScript files to include */
  js?: string | string[];
  /** Inline JavaScript content */
  inline_js?: string | string[] | Array<{ js: string; [key: string]: string }>;
  /** Content locale (defaults to en_US) */
  locale?: string;
  /** Open Graph title */
  og_title?: string;
  /** Open Graph description */
  og_desc?: string;
  /** Open Graph image */
  og_image?: string;
  /** Content type (defaults to website) */
  type?: string;
  /** Image width */
  img_width?: number;
  /** Image height */
  img_height?: number;
  /** Open Graph comment */
  og_comment?: string;
  /** Open Graph image type */
  og_img_type?: string;
  /** Open Graph secure image URL */
  og_secure_img_url?: string;
  /** Open Graph audio URL */
  og_audio?: string;
  /** Open Graph video URL */
  og_video?: string;
  /** Open Graph determiner */
  og_determiner?: 'a' | 'an' | 'the' | 'auto' | '';
  /** Alternative locales */
  og_alternate_locales?: string[];
  /** Twitter card type */
  twitter_card_type?: 'summary' | 'summary_large_image' | 'app' | 'player';
  /** Twitter handle */
  twitter_handle?: string;
  /** Creator's Twitter handle */
  creator_handle?: string;
  /** Twitter title */
  twitter_title?: string;
  /** Twitter image */
  twitter_image?: string;
  /** Twitter image alt text */
  twitter_image_alt?: string;
  /** Twitter description */
  twitter_desc?: string;
  /** Twitter comment */
  twitter_comment?: string;
  /** Twitter meta attribute name */
  twitter_attr_name?: string;
  /** Custom tags */
  custom?: Array<{
    tag: string;
    text?: string;
    attrs?: Record<string, string>;
    selfClosing?: boolean;
  }>;
  /** Minify output */
  minified?: boolean;
  /** Base64 encoded favicon */
  favicon?: string;
}

declare function metagen(options: MetaGeneratorOptions): string[];

export = metagen;
