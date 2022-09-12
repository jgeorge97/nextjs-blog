import { NextApiRequest, NextApiResponse } from 'next'

export const hello = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}