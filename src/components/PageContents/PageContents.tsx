import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPage } from '../../axiosAPI';

const PageContents: React.FC = () => {
  const { pageName } = useParams<{ pageName: string }>();
  const [content, setContent] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      setError(null);

      try {
        const pageData = await getPage(pageName!);
        setContent(pageData);
      } catch {
        setError("Error fetching page.");
      } finally {
        setLoading(false);
      }
    };

    if (pageName) {
      fetchPage();
    } else {
      setError("Page name is undefined.");
      setLoading(false);
    }
  }, [pageName]);

  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h1>{content?.title}</h1>
      <p>{content?.content}</p>
    </div>
  );
};

export default  PageContents;


