import LinkIcon from '../assets/link.svg?react';

const Project = () => {
  return (
    <div className="flex text-sm text-gray-800 bg-white shadow-sm gap-4 p-5 px-10 m-4">
      <div className="flex-none items-left gap-4 py-10 w-full md:w-200 px-5 md:px-25">
        <h2 className="text-3xl mb-3">My Projects</h2>
        <ul className="work-list">
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">Notes & Noodles<LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">help students navigate the campus.</p>
          </li>
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">Path Optimizer<LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">find efficient route based on carbon or time.</p>
          </li>
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">Puzzle Times<LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">modern, responsive, and simple puzzle app.</p>
          </li>
          <li className="work-item flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <a href="#" className="work-link">Act One <LinkIcon width={17} height={17} /></a>
            <p className="text-left md:text-right mt-2 md:mt-0">discover the drama club’s beautiful gallery.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;

// ix:arrow-diagonal-top-right