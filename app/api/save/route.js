import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function POST(req) {
  try {
    // Parse the incoming JSON data
    const users = await req.json()

    // Define the path to your JSON file (relative path two directories up)
    const filePath = path.join(process.cwd(), 'app', 'users.json')
    console.log(process.cwd())
    // Override the JSON file with new data
    await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8')

    // Return a success response
    return NextResponse.json({ message: 'Data successfully written' }, { status: 200 })
  } catch (error) {
    console.error('Error writing to file:', error)
    return NextResponse.json({ error: 'Failed to write data' }, { status: 500 })
  }
}
