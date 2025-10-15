import { COMPANIES, TITLE } from "./constants";

export const Companies = () => {
  return (
    <section className="flex flex-col justify-center items-center my-32">
      <h2 id="companies-heading">{TITLE}</h2>
      <div className="grid grid-cols-5 gap-4 mx-8 items-center">
        {COMPANIES.map((company) => (
          <a
            key={company.name}
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <img src={company.src} alt={`Logo of ${company.name}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Companies;
