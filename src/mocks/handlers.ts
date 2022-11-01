import { rest } from 'msw'

export const handlers = [
  rest.get('https://github.com/octocat', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Mocked response JSON body Mathewww',
      }),
    )
  }),
]
