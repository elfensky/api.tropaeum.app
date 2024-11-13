import { TypedNextResponse, route, routeOperation } from 'next-rest-framework';
import { z } from 'zod';

// const runtime = 'edge'; // Edge runtime is supported.

const MOCK_TODOS = [
    {
        id: 1,
        name: 'TODO 1',
        completed: false,
    },
    // ...
];

const todoSchema = z.object({
    id: z.number(),
    name: z.string(),
    completed: z.boolean(),
});

const { GET, POST } = route({
    getTodos: routeOperation({
        method: 'GET',
    })
        .outputs([
            {
                status: 200,
                contentType: 'application/json',
                body: z.array(todoSchema),
            },
        ])
        .handler(() => {
            return TypedNextResponse.json(MOCK_TODOS, {
                status: 200,
            });
        }),

    createTodo: routeOperation({
        method: 'POST',
    })
        .input({
            contentType: 'application/json',
            body: z.object({
                name: z.string(),
            }),
        })
        .outputs([
            {
                status: 201,
                contentType: 'application/json',
                body: z.string(),
            },
            {
                status: 401,
                contentType: 'application/json',
                body: z.string(),
            },
        ])
        .middleware((req) => {
            if (!req.headers.get('very-secure')) {
                return TypedNextResponse.json('Unauthorized', {
                    status: 401,
                });
            }
        })
        .handler(async (req) => {
            const { name } = await req.json();

            return TypedNextResponse.json(`New TODO created: ${name}`, {
                status: 201,
            });
        }),
});

export { GET, POST };
