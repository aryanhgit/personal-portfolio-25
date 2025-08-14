import LinkIcon from '../assets/link.svg?react';

const Project = () => {
  return (
    <div className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
      <div className="flex-none items-left gap-4 py-10 w-full md:w-200 px-5 md:px-25">
        <h2 className="text-3xl mb-3">My Projects</h2>
        <ul className="work-list">
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">Ikiform <LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">an open-source, ai-native alternative to google forms.</p>
          </li>
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">HextaUI blocks <LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">complete blocks for rapid front-end development.</p>
          </li>
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">HextaUI <LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">modern, responsive, and customizable ui components.</p>
          </li>
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">Iki <LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">beautiful open-source notes with ai features.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;

// ix:arrow-diagonal-top-right