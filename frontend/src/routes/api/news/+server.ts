import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface NewsData {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    tags?: string[];
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const authHeader = request.headers.get('Authorization');

        // Simple security check
        // In a real app, use: import { N8N_API_KEY } from '$env/static/private';
        const API_KEY = 'Bearer secure-token-123';

        if (authHeader !== API_KEY) {
            return json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data = await request.json() as NewsData;

        // Validation
        if (!data.title || !data.content) {
            return json({ error: 'Missing title or content' }, { status: 400 });
        }

        console.log('Received news from n8n:', data);

        // TODO: Save to database or file system
        // For now, we simulate success

        return json({
            success: true,
            message: 'News received successfully',
            receivedData: {
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                tags: data.tags
            }
        });
    } catch (error) {
        console.error('Error processing request:', error);
        return json({ error: 'Invalid JSON or server error' }, { status: 500 });
    }
};
