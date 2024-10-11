import React from "react";

import { translations } from "@/lib/languageTC";
import { useAppContext } from "@/context/appContext";

const TermsOfUse:React.FC = () => {
  const { language, theme } = useAppContext();
   const t = translations[language];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-800 text-gray-300" : "bg-white text-black"
      } font-sans md:p-5 p-2 lg:pt-32`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-gray-300" : "text-blue-800"
        } text-center text-2xl my-5`}
      >
        {t.title}
      </h1>

      <div className="max-w-4xl m-auto space-y-5">
        <p className="text-sm italic">{t.lastUpdated}</p>

        <p>{t.welcome}</p>
        <p>{t.siteDefinition}</p>
        <p>{t.serviceDefinition}</p>
        <p>{t.termsDefinition}</p>
        <p>{t.applicability}</p>
        <p className="font-bold">{t.reviewRequest}</p>

        <h2 className="text-xl font-bold mt-8">{t.privacyPolicy}</h2>
        <p>{t.privacyPolicyText}</p>

        <h2 className="text-xl font-bold mt-8">{t.aboutService}</h2>
        <p>{t.aboutServiceText}</p>

        <h2 className="text-xl font-bold mt-8">{t.registration}</h2>
        <p>{t.registrationText}</p>

        <h2 className="text-xl font-bold mt-8">{t.useRestrictions}</h2>
        <p>{t.useRestrictionsText}</p>
        <ul className="list-disc pl-5 mt-2">
          {t.useRestrictionsList.map((restriction, index) => (
            <li key={index}>{restriction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TermsOfUse;
