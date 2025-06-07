const Button = ({ text, className, id }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById(id);
        if(target && id)
        {
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
      className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          {/*<img src="/images/arrow-down.svg" alt="arrow"/>*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-black">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </button>
  );
};
export default Button;
