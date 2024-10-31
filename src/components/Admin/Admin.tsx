import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePage, getAllPages, getPage } from '../../axiosAPI';
import PageForm from '../PageForm/PageForm.tsx';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [initialContent, setInitialContent] = useState<{ title: string; content: string }>({ title: '', content: '' });

  useEffect(() => {
    const fetchPages = async () => {
      const pagesData = await getAllPages();
      setPages(Object.keys(pagesData));
    };

    fetchPages();
  }, []);

  const handlePageChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedPage(selected);
    const pageData = await getPage(selected);
    setInitialContent(pageData);
  };

  const handleSave = async (content: { title: string; content: string }) => {
    await savePage(selectedPage, content);
    alert('Page saved successfully!');
    navigate(`/pages/${selectedPage}`);
  };
  return (
    <div>
      <h1>Edit pages</h1>
      <select onChange={handlePageChange} value={selectedPage}>
        <option value="">Select Page</option>
        {pages.map(page => (
          <option key={page} value={page}>{page}</option>
        ))}
      </select>
      <PageForm initialContent={initialContent} onSave={handleSave} />
    </div>
  );
};

export default Admin;

