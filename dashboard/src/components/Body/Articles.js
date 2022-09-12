import './Article.css';
import { Fragment } from 'react';
import Article2 from '../../images/article2.png';
import Article1 from '../../images/article1.png';
import Article3 from '../../images/article3.png';
import Article4 from '../../images/article4.png';

const articles = [
  {
    title: 'Mobility Networks for Predicting Gentrification',
    citation:
      'Gardiner, Oliver & Dong, Xiaowen. (2021). Mobility Networks for Predicting Gentrification.',
    link: 'https://web.media.mit.edu/~xdong/paper/complexnetworks20.pdf',
    thumbnail: Article1,
    imgClassName: 'img-article__1',
  },
  {
    title:
      'Using Machine Learning to Identify and Predict Gentrification in Nashville, Tennessee.',
    citation:
      'Knorr, D.: Using Machine Learning to Identify and Predict Gentrification in Nashville, Tennessee.',
    link: 'https://ir.vanderbilt.edu/bitstream/handle/1803/13285/07242019_Dknorr_Thesis_Final2.pdf?sequence=1&isAllowed=y',
    thumbnail: Article2,
    imgClassName: 'img-article__2',
  },
  {
    title: 'Changing Faces: A Spatial Analysis of Gentrification in Boston, MA',
    citation: 'Mario Lagnese - GIS 101 - December 16, 2019',
    link: 'https://sites.tufts.edu/gis/files/2020/07/lagnese_mario_GIS101_Fall2019.pdf',
    thumbnail: Article3,
    imgClassName: 'img-article__3',
  },
  {
    title: 'Gentrification Prediction Using Machine Learning',
    citation:
      'Alejandro, Y., Palafox, L.: Gentrification prediction using machine learning. 18th Mexican International Conference on AI. MICAI 2019, Xalapa, Mexico, pp. 187–199. Springer (2019)',
    link: 'https://dl.acm.org/doi/10.1007/978-3-030-33749-0_16',
    thumbnail: Article4,

    imgClassName: 'img-article__4',
  },
];

const Articles = () => {
  return (
    <Fragment>
      <h2 className="article__heading">References</h2>
      <div className="article-grid">
        {articles.map((article) => (
          <div className="my_grid-item">
            <a href={article.link} target="_blank" rel="noreferrer">
              <img
                src={article.thumbnail}
                alt="article thumbnail"
                className={`article_thumbnail ${article.imgClassName}`}
              />
            </a>
            <div className="article_info">
              <h4 className="article_title">{article.title}</h4>
              <p className="article_citation">{article.citation}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Articles;
