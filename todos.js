import dbConnect from '../../lib/dbConnect'; // Ensure this path is correct
import Todo from '../../models/todoModel'; // Update this path to match your file name


export default async function handler(req, res) {
  await dbConnect();

  try {
    const { page = 1, limit = 5 } = req.query;
    const todos = await Todo.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
}
