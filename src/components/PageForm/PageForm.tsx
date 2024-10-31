import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PageFormProps {
  initialContent: { title: string; content: string };
  onSave: (content: { title: string; content: string }) => void;
}

const PageForm: React.FC<PageFormProps> = ({ initialContent, onSave }) => {
  const [title, setTitle] = useState(initialContent.title);
  const [content, setContent] = useState(initialContent.content);

  useEffect(() => {
    setTitle(initialContent.title);
    setContent(initialContent.content);
  }, [initialContent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <ReactQuill value={content} onChange={setContent} />
      <button type="submit">Save</button>
    </form>
  );
};

export default PageForm;
