import { createConnection } from '@/lib/db';

export async function GET(req) {
    const connection = await createConnection();

    try {
        const [rows] = await connection.execute('SELECT * FROM users');
        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    } finally {
        await connection.end();
    }
}
