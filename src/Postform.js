import React from 'react'
import { useState } from 'react'
import './Postform.css'

function Postform() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('harris');
    return (
        <div className="create">
            <form>
                <label>Post title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="harris">harris</option>
                    <option value="kevin">kevin</option>
                    <option value="michael">michael</option>
                </select>
                <button>Add Post</button>
            </form>
        </div>
    )
}

export default Postform