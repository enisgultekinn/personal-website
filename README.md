# personal-website

[enisgultekin.me](https://enisgultekin.me) — Enis Gültekin'in kişisel sitesi ve
blogu. MDX yazılar, okuma listesi, RSS akışı, görüntülenme sayacı ve PWA/çevrimdışı
desteği içerir.

Built with **Next.js 16** (App Router) · **React 19** · **Tailwind CSS v4** ·
**Content Collections** (MDX) · **Upstash Redis** (görüntülenme sayacı).

## Geliştirme

```bash
bun install
bun dev      # http://localhost:3000
```

Görüntülenme sayacı için `.env.local` içine Upstash bilgileri gerekir:

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Komutlar

```bash
bun dev          # geliştirme sunucusu
bun run build    # production derlemesi
bun start        # production sunucusu
bun run lint     # eslint
```

Yeni yazı eklemek için `src/posts/` altına `.mdx` dosyası oluştur
(`title`, `date`, `description` frontmatter alanlarıyla).
