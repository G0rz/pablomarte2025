import type {MetadataRoute} from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://pablo-marte.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'pablo-marte.com/music',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'pablo-marte.com/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}

// export default function robots(): MetadataRoute.Robots {
//     const isNoindex = process.env.APP_INDEX_MODE === 'NOINDEX'
//     const domain = process.env.NEXT_PUBLIC_APP_DOMAIN
//
//     return {
//         rules: isNoindex
//             ? {
//                 userAgent: '*',
//                 disallow: '/',
//             }
//             : {
//                 userAgent: '*',
//                 allow: '/',
//             },
//         sitemap: `${domain}/sitemap.xml`,
//     }
// }